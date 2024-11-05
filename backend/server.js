require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const httpErrors = require("http-errors");
const db = require("./models/index");
const productRouter = require("./routes/product.route");
const categoryRouter = require("./routes/category.route");

const HOST = process.env.HOSTNAME;
const POST = process.env.POST;
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use("/", async (req, res, next) => {
    next(httpErrors.BadRequest("Bad Request"));
});

app.use("/", async (req, res, next) => {
    res.status = err.status || 500;
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});

app.listen(POST, HOST, () => {
    console.log("server is running");
    db.connectDB();
});
