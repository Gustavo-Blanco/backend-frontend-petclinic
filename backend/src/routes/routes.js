const express = require('express');
const routes = express.Router({mergeParams:true});
const petRouter = require('./PetRouter');

routes.use("/pets",petRouter);
routes.post("/test", (req,res,next) => {
    console.log(req.body,req.query);
    res.json({false:true})
    // next();
});

module.exports = routes;