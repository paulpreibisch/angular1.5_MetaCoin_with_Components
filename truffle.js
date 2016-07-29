module.exports = {
  build: {
    "index.html": "index.html",
    "components/footer/footer.html":"components/footer/footer.html",
    "components/header/header.html": "components/header/header.html",
    "components/transactions/transactions.html": "components/transactions/transactions.html",
    "components/home/home.html": "components/home/home.html",
    "app.js":[
      "../bower_components/angular/angular.js",
    "../bower_components/crypto-js/crypto-js.js",
    "../bower_components/angular-ui-router/release/angular-ui-router.js",
    "components/transactions/transactions.js",
    "components/home/home.js",
    "config.js",
    "main.js",
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
