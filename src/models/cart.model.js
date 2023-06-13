import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const cartCollection = 'carts';

const cartSchema = new Schema({
    products: { type: Array, required: false, index: true },
    quantity: { type: Number, required: false, index: true }
})

cartSchema.plugin(mongoosePaginate)

const cartModel = model(cartCollection, cartSchema)

export default cartModel