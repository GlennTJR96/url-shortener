const { nanoid } = require('nanoid')

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

    Url.findOne({ where: { full_Url: req.body.url } })
        .then(data => {
            if (data != null) {
                res.status(400).send({
                    message: "URL already exist"
                });
            } else {
                
                const hashed = nanoid(10);
                // Create a URL
                const url = {
                    hashed: hashed,
                    full_Url: req.body.url,
                };

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
            }
        })
};

exports.get = (req, res) => {

    const short = req.params.short;
    // Validate request
    if (!short) {
        res.status(400).send({
            message: "URL can not be empty!"
        });
    }

    Url.findOne({ where: { hashed: short } })
        .then(data => {
            if (data != null) {
                res.send(data);
            } else {
                res.send("no result");
            }

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving url."
            });
        })
};