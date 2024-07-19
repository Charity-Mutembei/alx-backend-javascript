import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  return Promise.all([photo, user]).then(
    (values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
