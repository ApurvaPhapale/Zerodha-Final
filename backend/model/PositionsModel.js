const { model } = require("mongoose");
const { PositionsSchemas } = require("../schemas/PositionsSchemas");


// explicitly tell mongoose the collection name is 'positions'
const PositionsModel = new model("position", PositionsSchemas, "positions");

module.exports = { PositionsModel };
