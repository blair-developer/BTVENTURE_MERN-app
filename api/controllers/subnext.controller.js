import { errorHandler } from "../utils/error.js";
import Subscription from "../models/subscribe.model.js";; // Import your User model
import jwt from 'jsonwebtoken';


export const subscribe = async (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    // Check if the user with the provided email already exists
    const existingUser = await Subscription.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    // Save the email to the database (replace this with your User model logic)
    // Assuming you have a User model with a subscribe method
    const newSubscription = new Subscription({ email });
    await newSubscription.save();

    // Log the user in after subscribing (similar to your signin logic)
    const token = jwt.sign({ id: newSubscription._id }, process.env.JWT_SECRET);
    const { ...rest } = newSubscription._doc;

    // Set the token as a cookie for future requests
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
