# Pixel Pizza 🍕

A pixel art generator concept app that uses a GUID to create a unique pizza slice. Built as a 1-day build project during Zengenti's 2020 Lockdown (hackathon).

## Core concept

The app was made for a bit of fun and to test out different approaches to making pixel art. I wanted to try making a pizza slice in the most elaborate way I could think of. Which included making a base pixel 100x100 grid (with optional scaling) and setting each pixel to a specific colour. It sets the colour by looping over an index of the total count of pixels (for example the base count is 250,000 unless increased/decreased with scale option), if the current index is within a colour range configured in one of the layers it sets the colour.

A GUID is used to randomly selected each layer and specific options int he layer, eg colour.

## Fancy a slice? 🤤

### `npm i`

### `npm start`

### `click button`

## Notes

The slices aren't truly 'unique' as there aren't enough layers so you will eventually get duplicated make ups of the layers. I could fix this in the future by adding more layers.

## Other

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
