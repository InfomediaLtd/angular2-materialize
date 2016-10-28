var webpack = require("webpack");
module.exports = {
    entry: "./app/main.ts",
    output: {
        path: __dirname + "/webpack-dist",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        alias: {
          "materialize-css": 'materialize-css/dist/css/materialize.css'
        },
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.css']
    },
    externals: {
        jquery: 'jQuery'
  },
    module: {
        loaders: [
            {
              test: /materialize-css\/dist\/js\/materialize\.js/,
              loader: 'imports?materialize-css'
            },
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
        ]
    },
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Hammer: "hammerjs/hammer"
        })
    ]
};
