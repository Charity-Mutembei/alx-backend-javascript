export default function getFullResponseFromAPI(success) {
  const apiResponse = new Promise((resolved, rejected) => {
    if (success) {
      resolved({
        status: 200,
        body: 'Success',
      });
    } else {
      rejected(Error('The fake API is not working currently'));
    }
  });
  return apiResponse;
}
