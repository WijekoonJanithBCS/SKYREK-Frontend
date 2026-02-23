import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
                if (isPasswordValid) {
                    const token = jwt.sign({
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            image: user.image,
                            isEmailVerified: user.isEmailVerified
        
                    }, "i-computers-54!")

                    console.log(token);
                    console.log({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                        image: user.image,
                        isEmailVerified: user.isEmailVerified
                    })

                    res.status(200).json({
                        message: 'Login successful',
                        token: token
                    });
                } 
                else {
                    res.status(401).json({
                        message: 'invalid password',
                    });
                }  
                
                   
            }
        })  }

export function isAdmin(req){
    if(req.user==null){
        return false;
    }
    if(req.user.role=="admin"){
        return true;
    }
    return false;
}



            
      

