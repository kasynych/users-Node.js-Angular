"use strict";
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

const users = require("../modules/model");

// create application/json parser
var jsonParser = bodyParser.json();

router.get("/", function(req, res) {
  let args = { page: 1 };
  users.get(args)
	.then(results => res.json(results))
	.catch(error => res.status(500).send())
});

router.post("/", jsonParser, function(req, res) {
  users.create(req.body)
	.then(results => res.status(200).send())
	.catch(error => res.status(500).send())
});

router.put("/:id?", jsonParser, function(req, res) {
  users.update(req.body)
	.then(results => res.status(200).send())
	.catch(err => res.status(500).send())
});

router.delete("/:username", function(req, res) {
  users.delete(req.params.username)
	.then(results => res.status(200).send())
	.catch(err => res.status(500).send())
});

module.exports = router;
