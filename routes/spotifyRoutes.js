const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const router = express.Router();
const querystring = require('querystring');
const crypto = require('crypto');

dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

const stateKey = 'spotify_auth_state';

const generateRandomString = (length) => {
  return crypto
    .randomBytes(60)
    .toString('hex')
    .slice(0, length);
};

router.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

router.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      }
    };

    axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers })
      .then(response => {
        if (response.status === 200) {
          const access_token = response.data.access_token,
                refresh_token = response.data.refresh_token;

          const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token }
          };

          axios.get(options.url, { headers: options.headers })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error fetching user info:', error);
            });

          res.redirect('/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            }));
        } else {
          res.redirect('/#' +
            querystring.stringify({
              error: 'invalid_token'
            }));
        }
      })
      .catch(error => {
        console.error('Error during token exchange:', error);
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      });
  }
});

router.get('/refresh_token', (req, res) => {
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    })
  };

  axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers })
    .then(response => {
      if (response.status === 200) {
        const access_token = response.data.access_token;
        res.send({
          'access_token': access_token,
        });
      } else {
        res.status(response.status).send(response.data);
      }
    })
    .catch(error => {
      console.error('Error refreshing token:', error);
      res.status(500).send('Internal Server Error');
    });
});

router.get('/refresh_token', async (req, res) => {
  const refresh_token = req.query.refresh_token;
  
  if (!refresh_token) {
    return res.status(400).send({ error: 'refresh_token is required' });
  }

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
    },
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    })
  };

  try {
    const response = await axios.post(authOptions.url, authOptions.data, { headers: authOptions.headers });
    if (response.status === 200) {
      const { access_token } = response.data;
      res.send({ access_token });
    } else {
      res.status(response.status).send(response.data);
    }
  } catch (error) {
    console.error('Error refreshing token:', error.response ? error.response.data : error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/token', (req, res) => {
  const url = 'https://accounts.spotify.com/api/token';

  const authOptions = {
    method: 'POST',
    url: url,
    headers: {
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      grant_type: 'client_credentials'
    }
  };

  request(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    } else {
      res.status(response.statusCode).send(error);
    }
  });
});

module.exports = router;


