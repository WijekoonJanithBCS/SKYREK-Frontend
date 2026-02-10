import mogoose from 'mongoose';

const studentSchema = new mogoose.Schema({
    name: String,
    city: String,
    age: Number
    
})
const Student = mogoose.model('Student', studentSchema);

export default Student;