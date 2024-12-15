import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connectToDatabase(
    process.env.MONGO_DB_LOG_DATABASE
  );
  let errors = [];
  const collection = database.collection(
    process.env.MONGO_DB_LOG_COLLECTION_WARN
  );

  if (request.method !== 'POST') {
    response.status(405).json({ message: 'Method not allowed!' });
  } else {
    const { data } = request.body;

    try {
      if (!data) {
        errors.push({ message: 'Data is required' });
      }

      if (errors.length > 0) {
        response
          .status(400)
          .json({ errors: errors, message: 'Resolve Errors' });
        return;
      } else {
        const id = Math.floor(Math.random() * 1000000);
        // Initialize the issue with a status of 100 (Backlog)
        const status = data.status || 100;
        await collection.insertOne({
          name,
          status,
          id,
          startDate,
          endDate,
          issueType,
          assignedTo,
          summary,
          description,
          acceptanceCriteria,
          refTo,
        });
        response.status(201).json('Data saved successfully!');
      }
    } catch (e) {
      response
        .status(500)
        .json({ message: 'Something went wrong saving the data!' });
    }
  }
}
