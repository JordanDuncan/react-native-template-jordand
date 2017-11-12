# 🗺 app/navigators

`react-navigation` navigators.

## Structure

Each navigator should be in a directory which contains a `config.js` and an `index.js`.

### `config.js`

Constructs the navigator from a routeConfiguration object and a navigatorConfiguration object. 

See sample navigators for code.

### `index.js`

Creates a class for the navigator and links it to a Redux namespace. Navigation should be routed through Redux in this template so that we can access nav state anywhere, and also detect nav state changed with a redux middleware.

Again, see sample navigators for code.