const express = require("express");
const bodyParser = require("body-parser");
const { getAllCategories } = require("../controllers/category-controller");

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

categoryRouter.get("/list", getAllCategories);

module.exports = categoryRouter;