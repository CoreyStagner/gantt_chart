import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'pages/api/json/data.json');

  if (req.method === 'GET') {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return res.status(200).json(JSON.parse(jsonData));
  }

  if (req.method === 'POST') {
    await fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf-8');
    return res.status(200).json({ message: 'Data written successfully' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}
