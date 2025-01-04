export async function getLocalData() {
  const response = await fetch('/api/json/data');
  return response.json();
}

export async function writeLocalData(data) {
  try {
    const response = await fetch('/api/json/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to write data');
  } catch (error) {
    console.error('Error writing data:', error);
  }
}
