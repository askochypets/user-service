import Mongoose from 'mongoose';
import config from '../config/config.dev';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
  const { MONGO_URI } = config;
  try {
    await Mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.info('Connected to mongo!!!');
  } catch (err) {
    console.error('Could not connect to MongoDB');
  }
};

export default connectToDb;
