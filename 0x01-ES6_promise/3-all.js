import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const userAccount = createUser();
  const photoUploaded = uploadPhoto();

  return Promise.all([photoUploaded, userAccount]).then(
    (responses) => console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`),
    () => console.log('Signup system offline'),
  );
}
