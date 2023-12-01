import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) =>{
    const {username, email, password} = req.body; //get information from request body to save insode database
    const hashedPassword = bcryptjs.hashSync(password, 10); // encrypt password in database, 10 is just a salt number
    const newUser = new User({username, email, password: hashedPassword}); //save into database
    //use try,catch to uouput an error
    try {
        await newUser.save(); //save in database
        res.status(201).json('User created successfully'); 
    } catch (error) {
       next(error);
    }
    
};;
//api route for signin
export const signin = async (req, res, next) =>{
   const{email,password} = req.body;
   try {
    const validUser = await User.findOne({email});
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentilas'));
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
    const {password: pass, ...rest } = validUser._doc;
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
   } catch (error) {
     next(error);
   }
}


