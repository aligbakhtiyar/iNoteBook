var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ahmadisagoodboy';


const fetchuser = (req, res, next) => {
    // Get the user from JWT token and add id req object

    const token =req.header('auth-token')
    if(!token){
        res.status(401).send({erroe: "Pleease authneticate using a valid token"})
    }
    try{
    const data = jwt.verify(token, JWT_SECRET);
    req.user =data.user;
    next();
    
    } catch (error){
        res.send(401).send({error: "Pleease authneticate using a valid token"})

    }

}

module.exports = fetchuser;