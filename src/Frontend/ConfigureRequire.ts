/**
 * @preserve Copyright 2019-2021 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          ConfigureRequire
 * Responsibility:  Easy mode require configuration. Adds a map when the module name is not usable. e.g. popper.js is not valid.
 */

export class ConfigureRequire {
    // A guid I generated with LINQPad.
    public readonly uniqueIdentifier = "3a48b356-54ca-4eec-bba5-f08b0bc8ba68";

    /**
     * Relative path to the node_modules folder.
     */
    private readonly nodeModulesFolder = "../../node_modules/";

    /**
     * Registered modules.
     */
    private modules: { name: string; path: string }[] = [];

    /**
     * registerModule
     * @param {string} name Name of the module. e.g. react.
     * @param {string} path Path to the JS file. Omit 'node_modules'. This is added automatically.
     */
    public registerModule(name: string, path: string): this {

        this.modules.push({
            name: name,
            path: `${this.nodeModulesFolder}${path.startsWith("/") ? path.substring(1) : path}`
        });

        return this;
    }

    /**
     * getConfig
     * @returns {RequireConfig} Require configuration object.
     */
    public getConfig(): RequireConfig {

        const map: { [id: string]: string } = {};

        const configure: RequireConfig = {
            paths: {},
            map: {
                "*": map,
            },
        };

        if (configure !== undefined && configure.paths !== undefined) {
            for (const module of this.modules) {
                if (module.name.indexOf(".") > -1) {
                    let usableModuleName = module.name;

                    // Periods in paths are not supported and need to be mapped.
                    while (usableModuleName.indexOf(".") !== -1) {
                        usableModuleName = usableModuleName.replace(".", "");
                    }

                    // All periods are now removed from the module.
                    // Make it unique with a guid.
                    usableModuleName += "_" + this.uniqueIdentifier;

                    // Add a path
                    configure.paths[usableModuleName] = module.path;
                    map[module.name] = usableModuleName;
                } else {
                    configure.paths[module.name] = module.path;
                }
            }
        }

        return configure;
    }
}