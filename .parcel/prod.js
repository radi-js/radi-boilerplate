const Bundler = require('parcel-bundler');

process.env.NODE_ENV = 'production';

const bundler = new Bundler('./index.html', {
  publicUrl: './',
  outDir: './dist',
  sourceMaps: true,
  cache: false,
  detailedReport: true,
  minify: false,
});

bundler.bundle();
