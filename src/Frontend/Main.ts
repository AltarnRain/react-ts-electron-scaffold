/**
 * @preserve Copyright 2019-2020 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          Main
 * Responsibility:  Main module. Configures require and kicks off the application.
 */

import { ConfigureRequire } from "./ConfigureRequire";

const configure = new ConfigureRequire();

const configuration = configure
    .registerModule("react", "react/umd/react.development")
    .registerModule("react-dom", "react-dom/umd/react-dom.development")
    .getConfig();

// Configure packages.
requirejs.config(({
    paths: {
        "react": `${nodeFolder}react/umd/react.development`,
        "react-dom": `${nodeFolder}react-dom/umd/react-dom.development`,
        "popper": `${nodeFolder}popper.js/dist/umd/popper`,
        "react-popper": `${nodeFolder}react-popper/dist/index.umd`,
        "reactstrap": `${nodeFolder}reactstrap/dist/reactstrap`,
    },
    map: {
        "*": {
            // Map popper.js to 'popper. Paths do not support a name with a period.'
            "popper.js": "popper",
        },
    }
}));
requirejs.config(configuration);

// Require start and get things going!
requirejs(["Start"], (module: typeof import("./Start")) => {
    module.start();
});