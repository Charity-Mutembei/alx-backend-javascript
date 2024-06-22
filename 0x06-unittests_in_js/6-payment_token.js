function getPaymentTokenFromAPI(success){
    if (success) {
        return new Promise(function(resolve){
            resolve({data: 'Successful response from the API' })
        });
    }
}

module.exports = getPaymentTokenFromAPI;