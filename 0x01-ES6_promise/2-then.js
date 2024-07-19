export default function handleResponseFromAPI(promise) {
  const responseBody = { status: 200, body: 'success' };

  return promise
    .then(() => responseBody)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
