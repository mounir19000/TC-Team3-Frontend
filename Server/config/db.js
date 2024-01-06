import mongoose from 'mongoose'

const db = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/dev' );
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      await mongoose.disconnect();
    }
  };


export default db;