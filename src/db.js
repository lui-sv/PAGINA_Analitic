import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost/LocalBDSecodi")
        console.log(">>> DB conectado")
    }catch (error) {
        console.log(error);
    }
};