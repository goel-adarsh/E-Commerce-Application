export async function fetchData(params) {
  const response = await fetch(`https://dummyjson.com/${params}`);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error('');
  }

  return responseData;
}
