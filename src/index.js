import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';


$(document).ready(function() {
  

  $('#submitUSD').click(function() {
    let newCurrency = $('#newCurrency').val();
    clearFields();
    let promise = ExchangeService.convertUSDTo(newCurrency);;
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showConversion').text(`The humidity in ${city} is ${body.main.humidity}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});