const affectationService = require('./affectations.services');

module.exports.getAll = async (req,res)=>{
    console.log('get all affectation');
    let result =  await affectationService.findAll();
    res.send(result);
}
module.exports.getOne = async (req,res)=>{
    const id = req.params.id;
    const result = await affectationService.getOne(id);
    res.send(result);
}
module.exports.insertOne = async (req,res)=>{
    const item = req.body;
    console.log('insert One affectation');
    try{
        const result = await affectationService.insertOne(item);
        res.status(204).send({status : true , data : result});
    }catch(error){
        res.send({status: false, error: error.message});
    }
}
module.exports.deleteOne = async (req,res)=>{
   const id = req.params.id;
    try{
        const result = await affectationService.deleteOne(id);
        res.send(result);
    }catch(error){
        res.send({status: false,error: error});
    }
}
module.exports.updateOne = async (req,res)=>{
    const id = req.params.id;
    const item = req.body;
    const result = await affectationService.updateOne(id,item);
    res.send(result);
}


