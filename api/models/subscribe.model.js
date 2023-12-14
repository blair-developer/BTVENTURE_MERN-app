import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: true,
        unique: true,
    },
   
}, {timestamps: true }); //mongodb to record extra information like time

const Subscription = mongoose.model('subscription', subscriptionSchema);

export default Subscription;