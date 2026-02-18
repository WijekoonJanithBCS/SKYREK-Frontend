import User from '../models/user.js';
import bcrypt from 'bcrypt';

export function createUser(req, res) {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword
    })
    user.save()
        .then(result => {
            res.json({
                message: 'User created successfully',
                
            });
        })
        .catch (()=>
            res.json({
                message: 'user not created.an error occurred',
                
            })

        );
}
export function loginUsers(req, res) {
    User.findOne({ email: req.body.email })
        .then((user)=> {
            if(user==null){
                res.status(401).json({
                    message: 'user not found',
        }
        )  
            }
            else {
                const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
                console.log(isPasswordValid);
                res.status(200).json({
                    message: isPasswordValid ? 'Login successful' : 'Invalid password',
                });
            }
        })  }



            
      

