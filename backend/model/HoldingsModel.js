const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// explicitly tell mongoose the collection name is 'holdings'
const HoldingsModel = new model("holding", HoldingsSchema, "holdings");

module.exports = { HoldingsModel };
