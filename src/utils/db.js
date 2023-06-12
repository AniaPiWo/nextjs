import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongo db");
    } catch (error) {
        throw new Error("connection to db failed")
    }
}

export default connect;