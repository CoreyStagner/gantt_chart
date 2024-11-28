import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection(
    process.env.MONGO_DB_ISSUES_COLLECTION
  );

  if (request.method !== 'POST') {
    response.status(405).json({ message: 'Method not allowed!' });
  } else {
    const { data } = request.body;
    try {
      // TODO: Add validation for inserting or updating an issue
      const { name } = data;
      if (!name) {
        response
          .status(400)
          .json({ target: 'name', message: 'Name is required!' });
        return;
      }

      const id = Math.floor(Math.random() * 1000000);
      // Initialize the issue with a status of 100 (Backlog)
      const status = data.status || 100;
      await collection.insertOne({ name, id, status });
      response.status(201).json('Data saved successfully!');
    } catch (e) {
      response
        .status(500)
        .json({ message: 'Something went wrong saving the data!' });
    }
  }
}
