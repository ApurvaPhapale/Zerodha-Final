const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("orders", OrdersSchema); // not 'order', and no 'new'
module.exports = { OrdersModel };
