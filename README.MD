# Introduction

This is a template for building electron desktop applications in react. It relies on node integration and as such shoud NEVER be used to load external content from a website. If you do that, the website could feature check for things like 'fs' (=file system).

With that they can litteraly delete your hard drive. So. Do. Not. Load. External. Websites.

# Compile
From a command line run: tsc --watch

This will launch the TypeScript compiler in watch mode. Any time you edit a file it will do an incremental compilation.

Tip: keep this console visible at all times to quickly spot compile errors.

# Start
run: npm start

# Test with jest in watch mode.
run: npm test

# Debugging

Go to 'Debug'
Run 'Debug app'
This will launch the main process in debug mode and attach a debugger for the front end.

Simply put: you can debug anything.

Once you picked 'Debug app' press F5 to run a debug session and any break points you defined in VSCode will be hit.

Note: you do not have to re-launch the application to hit breakpoints and. Press CTRL-R, it'll work. If you do code changes and compile, you will have to close the application and debug using F5 again.