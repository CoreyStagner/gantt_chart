import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

if (!process.env.MONGO_DB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

export async function connectToDatabase(table) {
  try {
    if (mongoClient && database) {
      return { mongoClient, database };
    }
    if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      mongoClient = await new MongoClient(uri, options).connect();
    }
    database = await mongoClient.db(table || process.env.MONGO_DB_DATABASE);
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
  }
}
