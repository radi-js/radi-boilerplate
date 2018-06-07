const Bundler = require('parcel-bundler');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const bundler = new Bundler('./index.html', {
  outDir: './dist',
  sourceMaps: true,
  cache: false,
});

bundler.serve(1234, false);
