import mongoose from "mongoose";    

const parentSchema = new mongoose.Schema({
    name: String,
    city: String,
    age: Number
})

const Parent = mongoose.model('Parent', parentSchema);

export default Parent;