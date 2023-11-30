import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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


