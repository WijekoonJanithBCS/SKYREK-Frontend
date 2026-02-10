import express from 'express';
import mongoose from "mongoose";
import Student from './models/student.js';

const mongoURI = "mongodb+srv://admin:1234@cluster0.q4556dw.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}
)
.catch( (error)=> {
    console.error('Error connecting to MongoDB:', error );
}
);

const app = express();

app.use(express.json());

app.get(
    '/',(req, res) => {
        console.log('Get request received');
        res.json({message: 'Get request received successfully'});
    }
)

app.post(
    '/',(req, res) => {
      const student = new Student({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
      });
        student.save()
    }
)

app.delete(
    '/',(req, res) => {
        console.log('Delete request received');
        res.json({message: 'Delete request received successfully'});
    }
)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})