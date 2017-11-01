# Rooster Grin's Vue.js Build and Guidelines

Technologies
  - Vue.js
  - Vue Router
  - Vue Cache
  - VueX
  - Sass
  - Pug
  - Webpack & Gulp
  - Bootstrap 3 *(mixins only, not using most of the library)*
  - Wordpress
  - Wordpress API
  - SendGrid
  - *These will be changed out*
    - Contact Form Database Submissions
    - Contact From 7

## Simple Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Development Environment Gotcha's
  - For our dev eco system you will be using index.html during development
    - Our main ```<div id='app'>``` lives here
    - You can place google fonts / typekit here as well
  - We have also created a route that opens up the WordPress's menu options if you would like to call it
    - No longer will you have to use the plugin
    - You will need to register the menu in the ```enqueue.php``` file

      ```
      function get_menu() {
          # Change 'menu' to your own navigation slug.
          # You will need to register each menu if you'd like to use multiple.
          return wp_get_nav_menu_items('menu');
      }

      add_action( 'rest_api_init', function () {
              register_rest_route( 'api', '/menu', array(
              'methods' => 'GET',
              'callback' => 'get_menu',
          ) );
      } );
      ```

## Production Environment Gotcha's
  - For production you will want to move any dependencies / header footer updates for SEO to index.php
    - This will be used for our production state in WordPress
    - For google fonts / typekit you will want to place theses into functions.php to be asynchronously injected to the footer
      - You will want to do this for load time

  - The files that are necessary for WordPress are ```[ index.php, style.css, functions.php and screenshot.png ]```
    - We have these in the dist folder already so all you would need to do is have wp_pusher look at that subdirectory.

  - Before you push live you will want make sure that you have the correct .htaccess file
    - The one in here has been customized to allow better caching

## Getting a new project started

  1. Create Wordpress Backend via Blog Vault
      - You will be using {{ new project name }}.rgwplogin.com
  2. Change API endpoint in api.js file
      - You will be updating your api to {{ new project name }}.rgwplogin.com/wp-json



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
