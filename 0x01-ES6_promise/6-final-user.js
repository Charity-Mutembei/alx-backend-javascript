import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const responseGotten = [];
  try {
    const photo = await uploadPhoto(fileName);
    responseGotten.push({ status: 'success', value: photo });
  } catch (error) {
    responseGotten.push({ status: 'failed', value: error.toString() });
  }

  try {
    const user = await signUpUser(firstName, lastName);
    responseGotten.push({ status: 'success', value: user });
  } catch (error) {
    responseGotten.push({ status: 'failed', value: error.toString() });
  }

  return responseGotten;
}
