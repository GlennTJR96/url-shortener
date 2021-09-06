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

    // Create a URL
    const url = {
        hashed: "11111",
        full_Url: req.body.url,
    };

    const isExist = Url.findOne({ where: { full_Url: req.body.url } })
        .then(token => token !== null)
        .then(isUnique => isUnique);

    if (!isExist) {
        // Save URL in the database
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
    } else {
        res.status(400).send({
            message: "URL already exist!"
        });
    }
};

exports.get = (req, res) => {
    // Validate request

    const short = req.params.short;

    if (!short) {
        res.status(400).send({
            message: "URL can not be empty!"
        });
    }

    Url.findOne({ where: { hashed: short } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving url."
            });
        })
};