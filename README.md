# Restaurant Reviews
---

### Udacity Frontend Nanodegree Project

## Responsivness

The static code given from the start has been thoroughly refactored to be responsive and well displayed on any device and resolution. CSS feature used to achieve that was flexbox instead of Grid because of the better overall support which flexbox has right now.

## Accesibillity

The starter code didn't include any standard accessibility features so I have implemented Aria roles where needed, descriptive alt atributes on every image through Javascript, added tabindex atributes to some elements to maintain focus on page and used semantic code where possible.

## Service worker

The page didn't work offline so I have added a service worker to it. It's job is to cache every page request so it could be used later in situations of bad or no internet connection.

## ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.

## How to run

To run the project:
  1. Download all the code to the folder of your choice (ex. /Documents/restaurant-reviews)
  2. Open terminal or Command Prompt (cmd) - depending on device you use - and navigate to that folder
  3. Start the local server with:
    - *python -m SimpleHTTPServer 8000* (if you use Python 2)
    - *python3 -m http.server 8000*     (if you use Python 3)
  4. Visit the site in your browser at *http://localhost:8000*