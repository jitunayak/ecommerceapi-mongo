const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: {
        type: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ], required: true
    },


},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Cart", CartSchema)

