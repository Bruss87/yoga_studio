import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CartSchema = new Schema ({
    userId: {
        type: Number,
        ref: "user"
    },
    items:[
        {
            productId: {
                type: Number,
                ref: "item"
            },
            name: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Ilość nie może być mniejsza niż 1.'],
                default: 1
            },
            price: Number
        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }    
});

module.exports = Cart = mongoose.model('cart',CartSchema);