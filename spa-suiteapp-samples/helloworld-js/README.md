# Hello World - Sample Single Page Application (SPA) SuiteApp

This sample shows a minimal Hello World SPA SuiteApp written in JavaScript.

## Installation
+ `npm i` to install required dependencies
+ `suitecloud account:setup` to set up the  account where the SuiteApp will be deployed
+ `npm run build` to build the project inside a new `build` directory
+ `npm run deploy` to bundle the built app into the `FileCabinet` folder and deploy it into the configured account

For more information, see also [SPA Build Setup](../README.md#build-setup) and [SPA SuiteApp Deployment](../README.md#suiteapp-deployment).

## Application Structure

SPA SuiteApps have the following structure:
- `/src/SuiteApps` contains the sources of the SuiteApp and the `assets` folder for static assets.
- `/test` contains unit tests that you can run using the `npm test` task.
- `/types` contains TypeScript type declarations that will provide you with code completion for NetSuite UI Framework (UIF) classes.
- `/src/manifest.xml`, `/src/deploy.xml`, and `/src/Objects/custspa_xxx.xml` contain the configuration of the SuiteApp.
- `/build` contains the source files processed by the TypeScript compiler after running the `npm run build` task. The files can be cleaned by running the `npm run clean` task.
- `/src/FileCabinet/SuiteApps` contains the bundled and minified sources that are pushed to NetSuite. The files are generated by running `npm run bundle` and cleaned by running `npm run clean`.
- `/gulpfile.js` is a command line interface that provides the `build`, `bundle`, and `clean` npm tasks. It is possible to configure the source concatenation and minification here using the `concatenateScripts` and `minifyScripts` variables.

## Application Entry Point

The entry point for the frontend part of the application is the `SpaClient.js` file. It has to export a `run` function that bootstraps the application by setting the layout and providing the content.

The default layout is a scrolling layout. To achieve a layout that fills the entire viewport use the `application` layout value.

The content of an application can be any type of NetSuite UIF component - `functional`, `PureComponent`, or the legacy `Component` type.

### Code Linting

We suggest to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and
formatting. Configuration files are included in this sample app (`.eslintrc` & `.prettierrc`) and npm scripts to inspect
and fix issues are prepared in the `package.json` file - look for `inspect` and `lint` scripts.