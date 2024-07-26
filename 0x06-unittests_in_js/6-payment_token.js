const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return new Promise((resolve) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      }
    });
  }
};

module.exports = getPaymentTokenFromAPI;
