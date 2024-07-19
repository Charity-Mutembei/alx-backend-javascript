// Import the required functions
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions with the provided arguments
  const signUpPromise = signUpUser(firstName, lastName);
  const photoUploadPromise = uploadPhoto(fileName);

  // Define a named function for determining the value
  function determineValue(result) {
    if (result.status === 'fulfilled') {
      return result.value;
    }
      return result.reason;

  }

  return Promise.allSettled([signUpPromise, photoUploadPromise])
    .then((results) => results.map((result) => ({
        status: result.status,
        value: determineValue(result)
      })));
}

