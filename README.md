# Restaurant Reviews
---

### Udacity Frontend Nanodegree Project

## Responsivness

The static code given from the start has been thoroughly refactored to be responsive and well displayed on any device and resolution. CSS feature used to achieve that was flexbox instead of Grid because of the better overall support which flexbox has right now.

### Accesibillity

The starter code didn't include any standard accessibility features so I have implemented Aria roles where needed, descriptive alt atributes on every image through Javascript, added tabindex atributes to some elements to maintain focus on page and used semantic code where possible.

### Service worker

The page didn't work offline so I have added a service worker to it. It's job is to cache every page request so it could be used later in situations of bad or no internet connection.

### ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.