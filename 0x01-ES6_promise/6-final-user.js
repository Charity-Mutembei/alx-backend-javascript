import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const userSigned = await signUpUser(firstName, lastName);
    res.push({ status: 'success', value: userSigned });
  } catch (error) {
    res.push({ status: 'failed', value: error.toString() });
  }

  try {
    const photoUpload = await uploadPhoto(fileName);
    res.push({ status: 'success', value: photoUpload });
  } catch (error) {
    res.push({ status: 'failed', value: error.toString() });
  }

  return res;
}
