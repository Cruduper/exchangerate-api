import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';



function conversion(usd, conversionRate){
}
$(document).ready(function() {
  

  $('#submit-usd').click(function() {
    let usd= $('#usd-input').val();
    let newCurrency = $('new-curr-input').val();
    let promise = ExchangeService.convertUsdTo(usd, newCurrency);;
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.show-conversion').text(`with ${usd} you can get ${body}%`);
    }, function(error) {
      $('.show-errors').text(`There was an error processing your request: ${error}`);
    });
  });
});



