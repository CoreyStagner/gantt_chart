var { ObjectId, ReturnDocument } = require('mongodb');
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  let errors = [];
  const collection = database.collection(
    process.env.NEXT_LOCAL_MONGO_DB_ISSUES_COLLECTION
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

      const filter = { _id: body._id };
      if (errors.length > 0) {
        response
          .status(400)
          .json({ errors: errors, message: 'Name is required!' });
        return;
      } else {
        await collection.findOneAndUpdate(
          filter,
          {
            $set: {
              ...body,
              startDate: {
                y: '2025',
                m: '01',
                d: '01',
              },
              endDate: {
                y: '2025',
                m: '01',
                d: '10',
              },
            },
          },
          { ReturnDocument: 'after' }
        );
        const responseMessage = async () => {
          return {
            message: 'Data saved successfully!',
            data: await collection.find(filter),
          };
        };
        response.status(201).json(responseMessage);
      }
    } catch (e) {
      console.log(e);
      response.status(500).json({
        message: 'Something went wrong saving the data!',
        errors: errors,
        stack: e,
      });
    }
  }
}
