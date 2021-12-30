Application to load offers from API endpoint and show it in grid layout, it's using lazy loading of images to make it performant on mobile devices.

## Development
- For development, use `yarn start` to start a local development server with hot reloading
- It also sets up a proxy to http://cdn.sixt.io for loading the data, this is specified in package.json for development, this is required as server doesn't have enabled cors requests

## Deployment
- Repository is integrated with vercel.app for automatic deployments after every commit
- Please use https://sixt-assignment.vercel.app/ to load production version of application

## Third Party Libraries
- [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) - to lazily load images
- [redux](https://www.npmjs.com/package/redux) - for fetching data from api
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - to support async action creators in redux (for fetching data from api)
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension) (dev dependency) - for debugging redux flows
