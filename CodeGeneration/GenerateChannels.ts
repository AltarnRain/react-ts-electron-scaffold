/**
 * @preserve Copyright 2019-2021 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */

/**
 * Module:          GenerateChannels
 * Responsibility:  Generates an array with valid channels.
 */

import { InterfaceDeclaration, Project, VariableDeclarationKind } from "ts-morph";

// Specify a project.
const project = new Project({
    tsConfigFilePath: "./tsconfig.json",
    skipAddingFilesFromTsConfig: true,
});

const sourceFile = project.addSourceFileAtPath("../src/Types/IMediator.d.ts");

// target file to write the keys string array to
const destFile = project.createSourceFile("../src/Frontend/Generated/Channels.ts", "", {
    overwrite: true
});

function createKeys(node: InterfaceDeclaration | undefined) {
    if (node === undefined) {
        throw Error("The node is not defined");
    }

    const allKeys = node.getProperties().map(p => p.getName());

    destFile.addImportDeclaration({
        isTypeOnly: true,
        moduleSpecifier: "../../Types/Channel",
        namedImports: ["Channel"],
    });

    destFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [{
            name: "Channels",
            type: "Channel[]",
            initializer: writer => {
                writer.write(`${JSON.stringify(allKeys)}`);
            }
        }]
    });
}

createKeys(sourceFile.getInterface("IMediator"));
destFile.saveSync(); // flush all changes and write to disk