export default class ExchangeService {  
  static getExchange(newCurrency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${newCurrency}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request);
        }
      };
      request.onerror = function() {
        reject(request);
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}