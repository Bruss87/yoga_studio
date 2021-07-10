import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    title: {
        type: String,
        required: true
     },
     description: {
         type: String,
         required: true
     },
     category:{
        type: String,
        required: true
     },
     price: {
         type: Number,
         required: true
     },
     img: {
         data: Buffer,
         contentType: String,
         required: true
     },
     date_added: {
         type: Date,
         default: Date.now
     },
})

module.exports = Item = mongoose.model('item', ItemSchema);