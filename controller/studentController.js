import Student from "../models/student.js";

export function getAllStudents(req, res)  {
        Student.find().then((result) => {
            res.json(result);
            
        }).catch((error) => {
           
            res.status(500).json({message: 'Error fetching students'+error});
        });
        
    }

export function CreateStudents(req, res)  {
      const student = new Student({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
      });
        student.save().then(() => {
            console.log('Student saved successfully');
            res.json({message: 'Student saved successfully'});
        }).catch((error) => {
            console.error('Error saving student:', error);
            res.status(500).json({message: 'Error saving student'});
        });
    }

