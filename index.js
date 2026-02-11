import express from 'express';
import mongoose from "mongoose";
import studentRouter from './router/studentRouter.js';
import teacherRouter from './router/teacherRouter.js';


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

app.use('/students', studentRouter);

app.use('/teachers', teacherRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})