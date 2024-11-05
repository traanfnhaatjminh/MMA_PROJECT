const mongoose = require("mongoose");
const Category = require("../models/Category");
const Product = require("./Product");
const ProductSize = require("./ProductSize");
const User = require("./User");
const Role = require("./Role");

//Khởi tạo đối tượng CSDL
const db = {};

//Bổ sung Entity object vào DB
db.Category = Category;
db.Product = Product;
db.ProductSize = ProductSize;
db.User = User;
db.Role = Role;

//Kết nối CSDL
db.connectDB = async () => {
    try {
        await mongoose
            .connect(process.env.MONGODB_URI)
            .then(() => console.log("Connect to MongoDB successfully."));
    } catch (error) {
        next(error);
        process.exit();
    }
};

module.exports = db;
