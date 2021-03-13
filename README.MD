# React TypeScript Electron Scaffold
This is my setup for an Electron application Desktop application that can safely load external content.

The following is installed and configured:
* React
* React-Dom
* Jest
* Ts-Jest
* Requirejs

Communication from the frontend to the backend is handled exclusively via ICP. I created a mediator object that is kept in sync via a shared interface. Simply put, you can do a call and get a response and you'll know exactly what you're going to get back.

Check ./src/Frontend/App.tsx for an example.

# Installation
npm install

# Running
Run bb.cmd and bf.cmd
npm start

# Developing
Run BB.cmd and BF.cmd

This will start the typescript compiler for the backend and frontend in watch mode. I prefer having these side by side in the same terminal. Now you can code to your hearts content.

Be sure to do a force reload in your electron application by pressing CTRL-R.

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

### Frontend
Contains all the front end code as well as a tsconfig.json file with output AMD. That's because require is used to resolve modules and it only supports AMD. I purposely did not install Webpack, I don't see the point with this setup.

### Backend
Contains all the backend code as well as a tsconfig.json file with output CommonJS.

## Development
Make sure you NEVER import a frontend code file in the Backend and vice versa. These projects cannot share code files. D.TS files for shared typings are fine as these are never compiled.

The reason is that the frontend uses AMD and requirejs for module resolution but the backend uses CommonJS. By interchanging files between the frontend and backend you'll see backend files being compiled as AMD and frontend files being compiled as Common JS. That. Will. Not. Work.

This solution keeps things light and simple. There's bundler like Webpack that handles 'the details'.

## Safety
It is very easy to make an unsafe electron application by letting node functionality slip into the Render code. That is not possible with this scaffold.

And API object is setup which exposes a `sendAndreceive` method that uses ICP to communicate.

This method is wrapped in a `FrontendMediator` class which derives from the `IMediator` interface.

The backend also has a mediator class called `BackendMediator` and it also derives from the `IMediator` interface. With a bit of JS magic it is possible
to link these classes together. This means every call to the backend is done knowing which parameters are required and what kind of response you're going to get.

## Communicating with the backend.
Every call to the backend should be done using the FrontendMediator object. This object's content is generated using an array that, itself is generated.
Each time you add a call to IMediator run Generate.cmd and the FrontendMediator will have a method to send a call to the backend.

This updates ./src/Frontend/Generated/Channels.ts and if you're using bf TypeScript will automatically compile this file.

Channels.ts exports an array of every key in IMediator. Since FrontendMediator only calls the Backend using a channel and some parameters this code can be generated just fine.

It's the Backend that does the heavy lifting.