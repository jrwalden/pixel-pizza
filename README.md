# Pixel Pizza 🍕

A pixel art generator concept app that uses a GUID to create a unique pizza slice. Built as a 1-day build project during Zengenti's 2020 Lockdown (hackathon).

## Core concept

My aim for the app was to try out different ways of colouring pixels individually.

The approach included making a base pixel 100x100 grid (with optional scaling) and setting each pixel to a specific colour.

It sets the colour of each pixel by looping over each index of the total count of pixels*, if the current index is within a colour range configured in one of the layers it sets the colour set in the layer. It then moves over to the next pixel (index).

Once it sets the colour of the last pixel in a row, which for a 100x100 square would be index 100, it then moves down to the next row. It does this by increasing a y axis count after every hundredth index, so 101 is position 1 on row 2, 201 is position 1 on row 3 and so on.

The scaling works by multiplying the base grid size and 'pixel' focus of what to colour. If set to 1 then it moves over every pixel by 1, if set to 5 it goes in blocks of 5 and so on.

A GUID is used to randomly select each layer and specific options in the layer, eg colour.

**for example the base count is 250,000 with the default scale of 5, unless increased/decreased with scale option.*

## Fancy a slice? 🤤

### `npm i`

### `npm start`

### `click button`

## Notes

The slices aren't truly 'unique' as there aren't enough layers so you will eventually get duplicated make ups of the layers. I could fix this in the future by adding more layers.

## Future plans

To make the slices genuinely 'unique' I could explore a procedural generation approach which, instead of using template positions of pepperoni pieces, could randomly generate locations and use collision detection checks to maintain a natural aethetic.

## Other

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
