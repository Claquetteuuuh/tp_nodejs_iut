import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()
let mongoConnection;

const connectString = process.env.MONGO_URI;

if (!connectString) {
  console.log('Aucune URI MongoDB trouvée');
  throw Error('Aucune URI MongoDB trouvée');
}

const connectDB = async () => {
  try {
    if (!global.mongoConnection) {
      mongoConnection = await mongoose.connect(connectString);
      global.mongoConnection = mongoConnection;
    } else {
      mongoConnection = global.mongoConnection;
    }
    console.log('Connexion à MongoDB réussie !');
    return mongoConnection;
  } catch (err) {
    console.log('Connexion à MongoDB échouée:', err);
    throw err;
  }
};

export default connectDB;
