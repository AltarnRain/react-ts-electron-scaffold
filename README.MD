# React TypeScript Electron Scaffold
This is my setup for an Electron application that uses react and typescript. Jest is installed for testing.

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
Contains all source code and folders as well as two typescript configuration files.

## ts_back.json
Compile options for the backend. 

## ts_front.json
Compile options for the frontend

## tsconfig_base.json
Base settings shared by ts_back and ts_front.

> Backend is compiled to CommonJS, the frontend is compiled to AMD.


## Safety
It is very easy to make an unsafe electron application by letting node functionality slip into the Render code. That is not possible with this scaffold.

And API object is setup which exposes a `send` and `receive` method. Both use ICP to do their thing.

Send uses `icpRenderer` to send arguments via a whitelisted `channel` to the main process. Receive does the reverse, it listens.