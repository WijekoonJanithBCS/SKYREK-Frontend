import Parent from "../models/parent.js";

export function getAllParents(req, res)  {
    Parent.find().then((result) => {
        res.json(result);
    }).catch((error) => {
        res.status(500).json({message: 'Error fetching parents'+error});
    });
}


export function CreateParents(req, res)  {
    const parent = new Parent({
        name: req.body.name,
        city: req.body.city,
        age: req.body.age
      });

    parent.save().then(() => {
        console.log('Parent saved successfully');
        res.json({message: 'Parent saved successfully'});
    }
    ).catch((error) => {
        console.error('Error saving parent:', error);
        res.status(500).json({message: 'Error saving parent'});
    });
}
