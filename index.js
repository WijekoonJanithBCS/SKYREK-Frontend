import express from 'express';
import mongoose from "mongoose";

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
       console.log(req.body);
       res.json({message: 'Data received successfully'});
    }
)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})