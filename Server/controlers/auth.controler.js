import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.headers["token"];
    if (!token) return res.status(401).end();

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, data) => {
        if (err) return res.status(403).send('Unauthorized');
        console.log(data);
        req.doctor = data.userId;  
        next();
    });
};
