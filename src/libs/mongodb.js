import mongoose  from "mongoose";



const connectMong = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("connected successfully")
    } catch (error) {
console.log(error)
    }

}

export default connectMong