const express = require('express');
const router = express.Router({mergeParams:true});
const petController = require('../controllers/PetController');

router.get('/',petController.all);
router.get('/:id', petController.find);
router.post('/save', petController.save);
router.put('/:id/update', petController.update);
router.delete('/:id', petController.delete);

module.exports = router