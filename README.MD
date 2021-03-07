# React TypeScript Electron Scaffold
This is my setup for an Electron application that uses react and typescript. Jest is installed for testing.

ContextIsolation is on, Node Integration is off. 

Communication from the frontend to the backend is handled exclusively via ICP.

# Installation
npm install

# Running
npm start

# Developing
Run BB.cmd and BF.cmd

This will start the typescript compiler for the backend and frontend.

# Debugging
Pick the 'Debug app' configuration and press F5. This will run the main process in debugmode and attach a debugger for the front end.

You'll hit every breakpoint.

# Project setup

## Src
Contains all source code and typings.

### Frontend
Contains all the front end code as well as a tsconfig.json file with output AMD

### Backend
Contains all the backend code as well as a tsconfig.json file with output common JS.

## Development
Make sure you NEVER import a frontend code file in the backend and vice versa. These projects cannot share code files. D.TS files for shared typings are fine
as these are never compiled.

The reason is that the frontend uses AMD and require for module resolution but the backend uses CommonJS. By interchanging files between the frontend and backend you'll see backend files being compiled as AMD and frontend files being compiled as Common JS. That. Will. Not. Work.

This solution keeps things light and simple. There's bundler like Webpack that handles 'the details'.

## Safety
It is very easy to make an unsafe electron application by letting node functionality slip into the Render code. That is not possible with this scaffold.

And API object is setup which exposes a `sendAndreceive` method that uses ICP to communicate.

This method is wrapped in a `FrontendMediator` class which derives from the `IMediator` interface.

The backend also has a mediator class called `BackendMediator` and it also derives from the `IMediator` interface. With a bit of JS magic it is possible
to link these classes together. This means every call to the backend is done knowing which parameters are required and what kind of response you're going to get.