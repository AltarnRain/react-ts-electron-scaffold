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

const UniqueIdentifier = "3a48b356-54ca-4eec-bba5-f08b0bc8ba68";

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

class ConfigureRequire {

    private modules: string[] = [];

    /**
     * Construct this class.
     */
    constructor(private nodeFolder: string) {
    }

    public registerModule(path: string): this {
        this.modules.push(`${this.nodeFolder}${path}`);
        return this;
    }

    public GetConfig(): RequireConfig {
        const configure: RequireConfig = {
            paths: {},
            map: {},
        };

        if (configure !== undefined && configure.paths !== undefined) {
            for(const module of this.modules) {
                if (module.indexOf(".")) {
                    let usableModuleName = module;

                    // Periods in paths are not supported and need to be mapped.
                    while(usableModuleName.indexOf(".") !== -1) {
                        usableModuleName = module.replace(".", "");
                    }

                    // All periods are now removed from the module.
                    // Make it unique with a guidk.
                    usableModuleName += usableModuleName + "_" + UniqueIdentifier;

                    // Add a patth
                    configure.paths[usableModuleName] = module;
                } else {
                    configure.paths[module] = module;
                }
            }
        }

        return configure;
    }
}
