module.exports = app => {
    const urlController = require("../controllers/url.controller.js");
  
    var router = require("express").Router();
  
    // Create a new URL
    router.post("/", urlController.create);

    // GET a  URL based on hash
    router.get("/:short", urlController.get);
  
    app.use('/api/url', router);
  };