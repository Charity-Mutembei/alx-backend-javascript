import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const responseGotten = [];
  try {
    const providedPhoto = await uploadPhoto(fileName);
    responseGotten.push({ status: 'success', value: providedPhoto });
  } catch (error) {
    responseGotten.push({ status: 'failed', value: error.toString() });
  }

  try {
    const userSigned = await signUpUser(firstName, lastName);
    responseGotten.push({ status: 'success', value: userSigned });
  } catch (error) {
    responseGotten.push({ status: 'failed', value: error.toString() });
  }

  return responseGotten;
}
