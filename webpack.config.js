const path = require("path");

module.exports = {
    entry: ['babel-polyfill', "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    devServer: {
        static: path.resolve(__dirname, "public"),
        historyApiFallback: true,
        port: 301,
        open: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", {runtime: "automatic"}],
                    ],
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules)/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
};
