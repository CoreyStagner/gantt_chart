import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  let errors = [];
  const collection = database.collection(
    process.env.MONGO_DB_ISSUES_COLLECTION
  );

  if (request.method !== 'POST') {
    response.status(405).json({ message: 'Method not allowed!' });
  } else {
    const { body } = request;
    console.log('attempting to post', body);
    try {
      // TODO: Add validation for inserting or updating an issue
      const {
        name,
        startDate,
        endDate,
        issueType,
        assignedTo,
        summary,
        description,
        acceptanceCriteria,
        refTo,
      } = body;

      if (!name) {
        errors.push({ target: 'name', message: 'Name is required!' });
      }

      if (errors.length > 0) {
        response
          .status(400)
          .json({ errors: errors, message: 'Name is required!' });
        return;
      } else {
        const id = Math.floor(Math.random() * 1000000);
        // Initialize the issue with a status of 100 (Backlog)
        const status = data.status || 100;
        const filter = { _id: mongodb.ObjectID(body.id) };
        const options = { upsert: true };
        console.log(filter, data, options);
        await collection.updateOne(
          filter,
          {
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
          },
          options
        );
        response.status(201).json('Data saved successfully!');
      }
    } catch (e) {
      response.status(500).json({
        message: 'Something went wrong saving the data!',
        errors: errors,
        stack: e,
      });
    }
  }
}
