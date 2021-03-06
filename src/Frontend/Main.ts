const nodeFolder = "../../node_modules/"

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