module.exports = app => {
    const urlController = require("../controllers/url.controller.js");
  
    var router = require("express").Router();
  
    // Create a new URL
    router.post("/", urlController.create);
  
    app.use('/api/url', router);
  };