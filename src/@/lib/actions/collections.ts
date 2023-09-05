import axios from 'axios';

export async function getCollections(baseUrl: string) {
  const url = `${baseUrl}/api/collections`;

  return await axios.get(url);
}