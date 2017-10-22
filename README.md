# tanaka-web

## Installation
* `npm install` or `yarn`

## Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

## Production (also for testing Universal/Prerendering locally)
**`npm run build:dynamic && npm run serve:dynamic`** - Compiles your application and spins up a Node Express to dynamically serve your Universal application on `http://localhost:4000`.

**`npm run build:static && npm run serve:static`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://127.0.0.1:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`
