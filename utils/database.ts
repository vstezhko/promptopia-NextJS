import mongoose, {ConnectOptions} from "mongoose";

let isConnected = false;

const mongodbUri = process.env.MONGODB_URI;

export const connectToDB = async () => {
  if (!mongodbUri) {
    throw new Error("mongodbUri are not provided.");
  }

  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(mongodbUri, {
      dbName: "share_prompt",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    } as ConnectOptions);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
