var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ProductSchema = new mongoose.Schema({
    name: String,
    // sections: Array,
    // sectionsLinks: Array,
    // user: String,
    chapterID: String,
    // courseName: String,
    description: String,
    order: Number,
    price: Number,
    status: String
});

var Product = mongoose.model('product', ProductSchema);
module.exports = Product;
