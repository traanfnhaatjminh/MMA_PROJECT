const express = require("express");
const bodyParser = require("body-parser");
const { getAllProducts, getProductByCategory } = require("../controllers/product-controller");

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.get("/list", getAllProducts);
productRouter.get("/category/:categoryId", getProductByCategory);

module.exports = productRouter;
