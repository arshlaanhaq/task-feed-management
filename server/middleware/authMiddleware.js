const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    console.log("->",token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded.id)
    req.user = await User.findById(decoded.id).select('-password');
    // console.log("Decoded Token:", decoded);

    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Invalid token' });


  }


};

module.exports = authenticate;
