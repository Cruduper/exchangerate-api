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
    let promise = ExchangeService.getExchange(newCurrency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const convertedAmt = convertFromUsd( usd, parseFloat(body.conversion_rate) );
      $('#show-conversion').text(`with $${usd}, you can get `+ convertedAmt);
      $('#show-conversion').show();
    }, function(error) {
      $('.show-errors').text(`There was an error processing your request: ${error}`);
    });
  });
});



