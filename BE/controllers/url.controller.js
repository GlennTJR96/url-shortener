const db = require("../models");
const Url = db.url;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.url) {
      res.status(400).send({
        message: "URL can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const url = {
        hashed: "11111",
        full_Url: req.body.url,
    };
  
    // Save Tutorial in the database
    Url.create(url)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the URL record."
        });
      });
  };