import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const object = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    object.photo = { status: photo.status, body: photo.body };
    object.user = { firstName: user.firstName, lastName: user.lastName };
  } catch (error) {
    object.photo = null;
    object.user = null;
  }

  return object;
}
