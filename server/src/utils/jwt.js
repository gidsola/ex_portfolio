/**
 * week 6 content code
 */


import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            username: user.username
        },
        process.env.JWT_SECRET,
        { 
            expiresIn: '30d'
        }
    );
};

export default generateToken;
