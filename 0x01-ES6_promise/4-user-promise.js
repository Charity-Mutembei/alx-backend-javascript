export default function signUpUser(firstName, lastName) {
  const result = new Promise((resolvedIssue) => {
    resolvedIssue({
      firstName,
      lastName,
    });
  });

  return result;
}
