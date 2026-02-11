import Teacher from "../models/teacher.js";

export function getAllTeachers(req, res)  {
    Teacher.find().then((result) => {
        res.json(result);
}
).catch((error) => {
    res.status(500).json({message: 'Error fetching teachers'+error});
});
}


export function CreateTeachers(req, res)  {
    const teacher = new Teacher({
        name: req.body.name,
        subject: req.body.subject,
        experience: req.body.experience
      });   
    teacher.save().then(() => {
        console.log('Teacher saved successfully');
        res.json({message: 'Teacher saved successfully'});
    }
    ).catch((error) => {
        console.error('Error saving teacher:', error);
        res.status(500).json({message: 'Error saving teacher'});
    });
}



