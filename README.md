# React Cryptocurrency App
Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Themes
The themes for this app will directly correlate to the api endpoints provided by the CoinGecko API. I want to split up the app into digestible React components in the following areas, which will most likely form part of a larger dashboard interface.

- Coins
- Exchanges
- Status Updates
- Exchange Rates
- Events
- Global

# Requirements (npm)
Requirements for this project can be found in the package.json. And can be installed with `npm install` from root of the project directory.

I aim to use the following packages:
**must have packages**
- antd (ui framework for react)
- react (front-end)
- react-router-dom (routing for react)
- chartjs (charting library)
- axios (graceful api calls)

**optional packages**
- redux (may need redux for state management if number of components grows)
- ant motion (animations for ant design ui)


# Tests

# Sources
- [The CoinGecko API](https://www.coingecko.com/en/api#)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
