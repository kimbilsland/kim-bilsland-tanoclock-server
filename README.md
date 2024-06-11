# TanO'Clock App
A simple timer application for managing sun exposure using UV rays for people laying outdoors. The app alerts users when to flip and notifies when the maximum recommended sun exposure time is reached. 

To be used in tandem with https://github.com/kimbilsland/kim-bilsland-tanoclock-server

## Introduction
If you are going to lay out in the sun, it is best to do it responsibly! TanO'Clock is a web application designed for sun lovers to mindfully enhance their outdoor tanning experience using sun safety. 

## Features
- Countdown timer for sun exposure
- Alerts to flip for even tanning
- Notifications for maximum sun exposure time
- Customizable settings based on skin tone
- Additional features
	- An embedded spotify listener
	- A mock-product shop for sunless tanning and sunscreen items.

## Installation
1. Clone the repository:

    client - git clone git@github.com:kimbilsland/kim-bilsland-tanoclock-client.git
	server - git clone git@github.com:kimbilsland/kim-bilsland-tanoclock-server.git

2. Install dependencies:
    npm install
	
3. Start the development server:
    npm run dev 
	npm start

4. Create a .env file

	Reference .env.sample

4. Open your browser and navigate to 
	client - `http://localhost:5173`
	server - `http://localhost:8080`

### Tech Stack

**Front End:** 
 - React
 - JavaScript
 - Sass

**Back End:**
 - Node
 - Express

 **Database**
 - MySQL

## Usage
- Click the timer "Start" button to begin the timer. 
- The timer will alert you every 12 minutes to flip.
- It will notify you when the maximum recommended sun exposure time is reached based on your selected skin tone.
- Click sunscreen timer "Start" button to begin a countdown for reapplication.
- The countdown will notify you when the two hours is up. 
- Use the "Pause" button to pause the timer and the "Reset" button to reset the timer to the initial state.
- While you are using the timers - the app provides additional features:
	- Use the embedded spotify app to listen to music while you lay outside
	- Scroll through sunscreen and alternative tan products and click to see additional product details. 

## API Reference

  GET /api/uvindex

  Fetches UV index data

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

  GET /api/products/${id}

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

  GET /skintones

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **No Key ** Id of item to fetch  |

  GET /products
  GET /products/:id

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **No Key ** Id of item to fetch  |


**spotify for future development


## Database

1. Download my SQL if you have not

2. Create database products
	PORT=8080
	CORS_ORIGIN=http://localhost:5173
	BACKEND_URL=http://localhost:8080
	DB_HOST=localhost
	DB_USER=
	DB_PASSWORD=
	DB_NAME=

## API Usage

https://www.openuv.io/dashboard

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#cd572d](https://via.placeholder.com/10/0a192f?text=+) #cd572d |
| Example Color | ![#ffffff](https://via.placeholder.com/10/f8f8f8?text=+) #ffffff |
| Example Color | ![#f8ecd8](https://via.placeholder.com/10/00b48a?text=+) #f8ecd8 |
| Example Color | ![#024da1](https://via.placeholder.com/10/00b48a?text=+) #024da1|
| Example Color | ![#ff7f50](https://via.placeholder.com/10/00b48a?text=+) #ff7f501|

## Documentation

[Documentation](https://www.openuv.io/dashboard)

## Contributing

Contributions are always welcome!

## Contact
For any questions, feel free to open an issue or contact me directly at [kimbilsland@gmail.com](mailto:kimbilsland@gmail.com).




