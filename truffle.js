module.exports = {
  build: {
    "index.html": "index.html",
    "javascripts/components/footer/footer.html":"javascripts/components/footer/footer.html",
    "javascripts/components/header/header.html": "javascripts/components/header/header.html",
    "javascripts/components/transactions/transactions.html": "javascripts/components/transactions/transactions.html",
    "javascripts/components/home/home.html": "javascripts/components/home/home.html",
    // "javascripts/_vendor/angular.js":"javascripts/_vendor/angular.js",
    // "javascripts/_vendor/crypto-js.js":"../bower_components/crypto-js/crypto-js.js",
    // "javascripts/_vendor/angular-ui-router.js":"javascripts/_vendor/angular-ui-router.js",
    // "javascripts/components/transactions/transactions.js": "javascripts/components/transactions/transactions.js",
    // "javascripts/components/home/home.js": "javascripts/components/home/home.js",
    // "javascripts/config.js": "javascripts/config.js",
    // "javascripts/main.js": "javascripts/main.js",

    "app.js":[
      "javascripts/_vendor/angular.js",
    "../bower_components/crypto-js/crypto-js.js",
    "javascripts/_vendor/angular-ui-router.js",
    "javascripts/components/transactions/transactions.js",
    "javascripts/components/home/home.js",
    "javascripts/config.js",
    "javascripts/main.js",
    ],

    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "MetaCoin",
    "ConvertLib"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
