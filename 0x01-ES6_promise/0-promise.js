export default function getResponseFromAPI() {
  const promiseResponse = new Promise((resolved, rejected) => {
    resolved({
      status: 200,
    });
    rejected(Error('API Failed'));
    return promiseResponse;
  });

  return promiseResponse;
}
