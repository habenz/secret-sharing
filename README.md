# This a site meant to showcase Shamir Secret Sharing

It's based off of the 'shamir' npm module: https://www.npmjs.com/package/shamir which encrypts character by character.

## Current functionality
### 2 pages:
* one for encryption (with number of shares being the same as the size of the quorum needed)
* one for decryption (with cipher text being a space separated list of 8-bit unsigned ints)

## Future functionality goals
* Galois field calculator 
* visual representation of the encryption (might need to change encryption library)

## Dream goals
* Write custom implementation of encryption algorithm 

##### sources:
	- main library: https://github.com/simbo1905/shamir
	- https://en.wikipedia.org/wiki/Shamir's_Secret_Sharing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
