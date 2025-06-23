const {model} =require ("mongoose");

const {PositionsSchema}=require('../schemas/PositionsSchemas');

const PositionsModel=new model("position",PositionsSchema);

module.exports={PositionsModel};