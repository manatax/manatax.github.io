
// Exporting to base path to take advantage of GH Pages' hosting

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname
    },
    mode: 'development',
    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
    },
};