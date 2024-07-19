function getResponseFromAPI() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("API response");
      }, 1000);
  });
}

export default getResponseFromAPI;
