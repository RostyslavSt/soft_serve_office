module.exports = {
    entry: "./src/app.jsx",
    output: {
        filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: [/node_modules/],
            options: {
                presets: ["react", "env"]
            }
        }]
    }
};