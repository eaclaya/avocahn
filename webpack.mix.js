let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')
mix.sass('src/css/app.scss', 'assets')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')]
    });