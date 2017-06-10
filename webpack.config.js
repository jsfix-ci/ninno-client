const getConfig = require('hjs-webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const OfflinePlugin = require('offline-plugin');

const config = getConfig({
  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  html: (context) =>
      `
        <!DOCTYPE html>
        <html>
        <head>
          <title>ninno</title>
          <link rel=stylesheet type="text/css" href="${context.css}">
        </head>
        <body>
          <div id="root"></div>
          <script src="${context.main}"></script>
        </body>
        </html>
      `
  ,

  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true

});

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(new DashboardPlugin());
}

config.plugins.push(
  new CopyWebpackPlugin([
    { from: 'static/images', to: 'images'}
  ])
);

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new OfflinePlugin({
      publicPath: '/',
      safeToUseOptionalCaches: true,
      caches: {
        main: [
          'ninno-client.*.css',
          'ninno-client.*.js',
        ],
        additional: [
          ':externals:',
        ],
        optional: [
          ':rest:'
        ],
      },
      externals: [
        '/',
        'validering',
        'generering',
      ],
      ServiceWorker: {
        navigateFallbackURL: '/',
      },
    })
  );
}

module.exports = config;
