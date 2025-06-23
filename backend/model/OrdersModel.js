const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

// explicitly tell mongoose the collection name is 'orders'
const OrdersModel = new model("order", OrdersSchema, "orders");

module.exports = { OrdersModel };
