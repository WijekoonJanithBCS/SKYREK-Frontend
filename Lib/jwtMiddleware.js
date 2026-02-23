import jwt from 'jsonwebtoken';

export default function authorizeUser(req, res, next)  {

    const header = req.headers['authorization'];

    if (header != null) {
        const token = header.replace("Bearer ", "");
        console.log(token);

        jwt.verify(token, "i-computers-54!", (error, decoded) => {
            if (decoded == null) {
                res.status(401).json({
                    message: 'invalid token',
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({
            message: 'token not provided',
        });
    }

}