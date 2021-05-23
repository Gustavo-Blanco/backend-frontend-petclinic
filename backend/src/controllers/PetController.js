const controller = {}
const Pet = require('../models/Pet');

controller.all = async (req,res) => {
    const pets = await Pet.find();
    res.json(pets);
}

controller.find = async (req,res) => {
    const {id} = req.params;
    const pet =  await Pet.findOne({id: parseInt(id)});
    res.json(pet);
}

controller.save = async (req,res) => {
    const body = {...req.body};
    const pet = new Pet(body);
    const petSaved = await pet.save();
    res.json(petSaved);
}

controller.update = async (req,res) => {
    const body = {...req.body};
    const {id} = req.params;
    const pet = await Pet.findByIdAndUpdate(id,body);
    res.json(pet);
}

controller.delete = async (req,res) => {
    await Pet.findByIdAndRemove(req.params.id);
    res.json({status:200});
};


module.exports = controller;