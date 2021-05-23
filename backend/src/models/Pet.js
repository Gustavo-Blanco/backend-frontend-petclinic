const {mongoose}  = require('../database');
const {Schema} = mongoose;

const petSchema = new Schema({
    name:{type: String,required:true},
    owner:{type: String,required:true},
})

module.exports = mongoose.model('Pet',petSchema);