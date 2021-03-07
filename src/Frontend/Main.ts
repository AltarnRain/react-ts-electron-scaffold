/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Main
 * Responsibility:  Main module. Configures require and kicks off the application.
 */

const nodeFolder = "../../node_modules/";

// Configure packages.
requirejs.config(({
    paths: {
        "react": `${nodeFolder}react/umd/react.development`,
        "react-dom": `${nodeFolder}/react-dom/umd/react-dom.development`
    }
}));

// Require start and get things going!
requirejs(["Start"],(module: typeof import("./Start")) => {
    module.start();
});