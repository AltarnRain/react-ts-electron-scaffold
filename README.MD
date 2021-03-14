# React TypeScript Electron Scaffold
This is my setup for an Electron application Desktop application that can safely load external content.

The following is installed and configured:
* React
* React-Dom
* Jest
* Ts-Jest
* Requirejs
* ts-morph

Communication from the frontend to the backend is handled exclusively via ICP. 

Check ./src/Frontend/App.tsx for an example.

# Design principles

* All calls are async from the front to the backend are async and should always return a Promise.
* Every call to the backend gives a response. It is up to the frontend to deal with this.
* The frontend cannot access anything on your machine.
* The backend can access things on your machine.
* No WebPack or bundling. For the frontend, RequireJS is used.
  * I created a configuration class to make things a little easier.

# Installation
npm install

# Developing
Run BB.cmd
 * Builds the backend and compiles on any file change

Run BF.cmd
 * Builds the frontend and compiles on any file change.

Run Generate.cmd
  * Generates code. Run this when you add a call to IMediator.

# Debugging
## Application
Pick the 'Debug app' configuration and press F5. This will run the main process in debugmode and attach a debugger for the front end.

You'll hit every breakpoint.

## Tests
This is handled by ts-jest and jest. 

1. Place a breakpoint
1. Go to 'Run and Debug'
1. Pick 'Jest tests'.
1. Press F5.
1. You should hit your breakpoint.

# Project setup
## Src
Contains all source code and typings.

This setup is split into two seperate project. Frontend and Backend. These projects can ONLY SHARE TYPES defined a D.TS files. 

### Frontend
Contains all the front end code as well as a tsconfig.json file with output AMD. That's because Requirejs is used to resolve modules and it only supports AMD. I purposely did not install Webpack, I don't see the point with this setup and its weighs a ton in JS content.

### Backend
Contains all the backend code as well as a tsconfig.json file with output CommonJS.

## Development
Make sure you NEVER import a frontend code file in the Backend and vice versa. These projects cannot share code files. D.TS files for shared typings are fine as these are never compiled.

The reason is that the frontend uses AMD and requirejs for module resolution but the backend uses CommonJS. By interchanging files between the frontend and backend you'll see backend files being compiled as AMD and frontend files being compiled as Common JS. That. Will. Not. Work.

This solution keeps things light and simple. There's bundler like Webpack that handles 'the details'.

## Safety
It is very easy to make an unsafe electron application by letting node functionality slip into the Render code. That is not possible with this scaffold.

And API object is setup which exposes a `sendAndreceive` method that uses ICP to communicate.

This method is wrapped in a `FrontendMediator` object which is generated using the calls/channels defined in `IMediator` interface. 

The backend also has a mediator class called `BackendMediator` and it also derives from the `IMediator` interface. With a bit of JS magic it is possible
to link these objects together. This means every call to the backend is done knowing which parameters are required and what kind of response you're going to get.

## Communicating with the backend.
Every call to the backend should be done using the FrontendMediator object. This object's content is generated using an array that, itself is generated.
Each time you add a call to IMediator run Generate.cmd and the FrontendMediator will have a method to send a call to the backend.

This updates ./src/Frontend/Generated/Channels.ts and if you're using bf TypeScript will automatically compile this file.

Channels.ts exports an array of every key in IMediator. Since FrontendMediator only calls the Backend using a channel and some parameters this code can be generated just fine.

It's the Backend that does the heavy lifting.

# Adding packages

## Frontend

Frontend packages have to be AMD or UMD. CommonJS is not supported.

You add packages using npm install as usual. To make them work you have to do a bit of configuration.

Go to ./src/Frontend/Main.ts

React and react-dom are already configured.

```ts
const configuration = configure
    .registerModule("react", "react/umd/react.development")
    .registerModule("react-dom", "react-dom/umd/react-dom.development")
    .getConfig();
```

To add a packages call `.registerModule'. The first parameter is the name of the package. The second is the package's location in node_modules.
> NOTE: The `ConfigureRequire` class automatically adds this to a path.