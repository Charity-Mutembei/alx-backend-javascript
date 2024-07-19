import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const user = await signUpUser(firstName, lastName);
    res.push({ status: 'success', value: user });
  } catch (error) {
    res.push({ status: 'failed', value: error.toString() });
  }

  try {
    const photo = await uploadPhoto(fileName);
    res.push({ status: 'success', value: photo });
  } catch (error) {
    res.push({ status: 'failed', value: error.toString() });
  }

  return res;
}
