import fs from 'fs/promises';
import path from 'path';

export default async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // The data will already be parsed as JSON by Next.js
      const filePath = path.join(process.cwd(), 'pages/api/json/data.json');

      // Convert the data to a formatted JSON string
      const jsonString = JSON.stringify(data, null, 2);

      await fs.writeFile(filePath, jsonString, 'utf-8');

      res.status(200).json({ message: 'File written successfully' });
    } catch (error) {
      console.error('Error writing file:', error);
      res
        .status(500)
        .json({ message: 'Error writing file', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
