import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function convertFromUsd(usd, conversionRate)  {
  return Math.round(((usd * conversionRate) + Number.EPSILON) * 100) / 100;
}

$(document).ready(function() {
  $('#submit-usd').click(function() {
    let usd= parseFloat( $('#usd-input').val() );
    let newCurrency = $('#new-curr-input').val();
    let prom = ExchangeService.getExchange(newCurrency);
    prom.then(
      function(respon) {
        const body = JSON.parse(respon);
        const convertedAmt = convertFromUsd( usd, parseFloat(body.conversion_rate) );
        $('#show-info').text(`with ${usd} USD, you can get `+ convertedAmt + ` ` + newCurrency.toUpperCase());
        $('#show-info').show();
      }, 
      function(reject) {
        
        if (reject.onreadystatechange != null) {
          const rej = JSON.parse(reject.response);
          //const rejec = JSON.parse(respon)["error-type"]
          $('#show-info').html(`There was an error processing your request:<strong> ${rej}</strong>`);
        } else {
          
          $('#show-info').html(`There was a ${reject.status} error processing your request: <strong>${reject.statusText}</strong>`);
        }
        $('#show-info').show();
      });
  });
});



