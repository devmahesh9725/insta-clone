import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log("Error in connecting the Mongo DB : -- > ");
        console.log("Error in connecting the Mongo DB : -- > ");
        console.log("Error in connecting the Mongo DB : -- > ");
        console.log("Error in connecting the Mongo DB : -- > ");
        console.log("Error in connecting the Mongo DB : -- > ");
        console.log(error);
    }
}
export default connectDB;