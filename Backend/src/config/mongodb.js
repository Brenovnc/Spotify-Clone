import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => { // Sempre que o status for connected, essa função será executada
        console.log("Conexão estabelecida!!");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default connectDB;