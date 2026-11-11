const mix = require('laravel-mix');

mix.babelConfig({
    presets: [['@babel/preset-typescript', {
        allExtensions: true,
        isTSX: true
    }]]
});

mix.webpackConfig({
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    }
});

mix.js('resources/js/app.tsx', 'public/js/app.js')
   .react()
   .postCss('resources/css/app.css', 'public/css/app.css', [
       require('@tailwindcss/postcss')
   ])
   .setPublicPath('public');
