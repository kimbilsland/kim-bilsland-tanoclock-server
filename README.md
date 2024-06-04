# TanO'Clock

## Overview

If you are going to lay out in the sun, it is best to do it responsibly! TanO'Clock is a web application designed for sun lovers to mindfully enhance their outdoor tanning experience using sun safety. 

### Problem

While the warmth of the summer sun is irresistible to many, overexposure to harmful UV rays poses significant health risks, including skin cancer and aging. Many people, especially younger generations, might risk overexposure without proper information on sun safety. TanO'Clock bridges this gap by promoting responsible sun management and enhancing the outdoor tanning experience.

According to the American Academy of Dermatology, a significant number of young adults prioritize tanning over preventing skin cancer, with 30% willing to risk long-term skin damage for short-term beauty. The World Health Organization recommends short periods of sun exposure to minimize skin damage while obtaining health benefits like vitamin D production. TanO'Clock helps users adhere to these guidelines by limiting sun exposure to 30 minutes and reminding them to use sunscreen and other protective measures.

### User Profile

The app is targeted to younger generations, GenZ and Millenials (general ages 15-35), who will use the app during the summer days or on vacation. We also provide recommendations for alternative sunless tanning products to keep the compliments coming year round.

 - Special considerations  
	 - skin tone & type
	 - age
	 - disposition/genetics
	 
The app categorizes users using the Fitzpatrick scale, which classifies skin types based on their response to UV exposure. 
https://www.healthline.com/health/beauty-skin-care/fitzpatrick-skin-types#skin-types

### Features

 - As a user, I'd like to be able to see a display on how high the UV index is before I go out in my current location or any chosen location to plan accordingly
 - As a user I'd like to have a timer that reminds me to rotate and track how long I have been out in the sun to avoid skin damage.
 - As a user, I'd like to have a reminder for sunscreen application.
 - As a user, I'd like to be reminded of all the items I need so I don't forget anything
 - As a user I'd like to be able to listen to curated summer music 
 - As a user, I want to get recommendations for sun and sunless tanning products 

## Implementation

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

**Client Libraries** 

 - react
 - react-router
 - axios

**Server Libraries**
 - knex
 - express

### APIs

-   UV Index API 
- Google API for current location
-  Create API for skin care/sunscreen based on skin tone selection and Sephora products
-   Spotify API for music integration

### Sitemap

-   **Home Page:**
    -   Overview of the app, features, skintone selector
-   **Main Page:**
    
    -  UV index information, timer and reminders.
-   **Spotify/Timer - Aside:**
    
    -   Access to curated playlists - integrate with timer.

-   **Products Section/Page:**
    
    -   Recommendations for sunless tanning products and their reviews.
 
### Mockups

	/assets/images/proposal/draft-outline.png
	/assets/images/proposal/draft2.png

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

UV Index
- longitude
- latitude
- name 
- risk level 

Products
-  name
- price
- rating
- link
- id

### Endpoints

 - GET UV index: get UV for a specific location
	 - use google API for location so user doesn't need to enter longitude and latitude
 - GET Products (sunscreen & alternative products)
- GET the specific products based on skin tone selection and ID
 - GET Playlists from Spotify
 
### Auth

Option A: No auth, use local storage of skin tone/type for timing and recommendations.
Option B: login for account - tan log, preferences, playlists etc..

## Roadmap

**Project Definition (May 27th - May 29th)** 

 - Complete proposal
 - Create UI models, base styles, color scheme
 - 
**Sprint 1 - Front End Development & Setup (May 30th - 5th)**
 - Set up file base and repos for front and and back end 
 - Create Database / API for products
 - Create the front-end project using React components
 - develop front end components and integrations 
	- Spotify, timer, UV API 

**Sprint 2 -Back-End Development (June 5th-7th)**
 - Create server side, add node and express servers 
 - integrate API's

**Sprint 3 - Integration & Presentation Preparation (June 7th-10th)**

 - Final updates on integrating font and back end
 - Prepare presentation for Capstone 

## Nice-to-haves

- Photo scanning for concerning sunspot areas / moles. Can be scanned and an alert will let users know if this could be of threat and if they should contact a doctor - this would also open up the age range of the app.  
- Dark mode for the application (save battery)
-   Integration with GoodReads
- Sunscreen selector for skin types (dry, oily etc) 
- Scientific backing and research
  - User authentication and personalized dashboard.
- Set custom reminder lists
