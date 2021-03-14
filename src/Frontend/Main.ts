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
requirejs.config(configuration);

// Require start and get things going!
requirejs(["Start"], (module: typeof import("./Start")) => {
    module.start();
});