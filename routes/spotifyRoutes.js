const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const router = express.Router();
const querystring = require("querystring");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
router.use(cors());
router.use(cookieParser());
router.use(express.json());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const generateRandomString = (length) => {
  return crypto.randomBytes(60).toString("hex").slice(0, length);
};

const stateKey = "spotify_auth_state";

router.use(express.static(__dirname + "/public")).use(cors()).use(cookieParser());

router.get("/login", function (req, res) {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = [
    "user-read-private",
    "user-read-email",
    "user-library-read",
    "playlist-read-private",
  ];
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope.join(" "),
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

router.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect("/#" + querystring.stringify({ error: "state_mismatch" }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      data: querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
    };

    axios(authOptions)
      .then((response) => {
        const { data } = response;
        const { access_token, refresh_token } = data;

        const options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
        };

        axios(options)
          .then((response) => {
            const { data } = response;
            console.log(data);
          })
          .catch((error) => {
            console.error("Error accessing Spotify API:", error);
          });

        res.redirect(
          "/#" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      })
      .catch((error) => {
        console.error("Error getting access token:", error);
        res.redirect(
          "/#" + querystring.stringify({ error: "invalid_token" })
        );
      });
  }
});

router.get("/refresh_token", function (req, res) {
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "post",
    data: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  };

  axios(authOptions)
    .then((response) => {
      const { data } = response;
      const { access_token, refresh_token } = data;
      res.send({
        access_token: access_token,
        refresh_token: refresh_token,
      });
    })
    .catch((error) => {
      console.error("Error refreshing token:", error);
      res.status(500).send("Error refreshing token");
    });
});

module.exports = router;
