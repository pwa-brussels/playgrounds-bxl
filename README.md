# playgrounds-bxl

A mobile web app that demonstrates the features of progressive web apps as defined on https://developer.mozilla.org/en-US/Apps/Progressive 

The purpose of the app is to provide information about playgrounds in Brussels based on open data available at http://opendata.brussels.be/explore/dataset/playgrounds/ 
and user generated content.

## Prerequisits
1. install npm
1. install globally jspm: `npm install -g jspm`
1. install globall sw-precache: `npm install -g sw-precache`

## Installation
1. Clone this git repository
1. enter the project folder
1. `npm install`
1. `jspm install`
1. maybe update service-worker.js: `sw-precache --config swprecache.config.js`
1. Launch web server from the root directory
1. Navigate to index.html

## Setting up notifications

1. Head over to https://web-push-codelab.appspot.com/
1. Copy the public key into notifications.js
1. Load page (twice possibly)
1. Copy endpoint data into Messagin section of site at (1)

## See it in action 

https://pwa-brussels.github.io/playgrounds-bxl/
