const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", "./src/index.js"]
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss|\.sass$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "images/[name].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(webm|mp4)$/,
        loader: "file-loader",
        options: {
          name: "videos/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: require("html-webpack-template"),
      inject: false,
      mobile: true,
      cache: false,
      minify: true,
      // your app title below
      title: "Stephanie's website",
      meta: [
        {
          charset: "UTF-8"
        },
        {
          name: "author",
          // your name below
          content: "stephanie"
        },
        {
          name: "description",
          // your app description below
          content: "my website"
        }
      ],
      links: [
        // all CDN links here as strings
        'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
      ],
      appMountId: "root",
      bodyHtmlSnippet: `<noscript>Please enable JavaScript...</noscript>`,
      scripts: [
        // all other script tags here
        // note: webpack will automatically insert all necessary
        //       script tags for all files produced from build
      ]
    })
  ]
};
