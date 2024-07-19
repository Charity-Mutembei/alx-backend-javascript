export default function uploadPhoto(filename) {
  const responseGiven = new Promise((rejected) => {
    rejected(Error(`${filename} cannot be processed`));
  });

  return responseGiven;
}
