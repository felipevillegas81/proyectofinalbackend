import { Schema, model } from 'mongoose';

const userCollection = 'users'

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
    password: { type: String, required: false },
    role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },

})

const userModel = model(userCollection, userSchema)

export default userModel