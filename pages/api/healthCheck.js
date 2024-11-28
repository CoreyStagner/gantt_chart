import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(request, response) {
  const { database } = await connectToDatabase();
  const collection = database.collection('neighborhoods');

  const results = await collection
    .find({})
    .project({
      grades: 0,
      borough: 0,
      restaurant_id: 0,
    })
    .toArray();

  response.status(200).json(results);
}
