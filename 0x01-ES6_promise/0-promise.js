export default function getResponseFromAPI() {
  const response = new Promise((resolve, reject) => {
    resolve({
      status: 200,
    });
    reject(Error('Failure'));
    return response;
  });

  return response;
}
