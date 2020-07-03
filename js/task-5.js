let price = 0;
let country = prompt('Your Country?').toLowerCase();

let priceChina = '100';
let priceChili = '250';
let priceAustralia = '170';
let priceIndia = '80';
let priceJamayka = '120';

switch (country) {
  case 'китай':
    price = '100';
    break;
  case 'чили':
    price = '250';
    break;
  case 'австралия':
    price = '170';
    break;
  case 'индия':
    price = '80';
    break;
  case 'ямайка':
    price = '120';
    break;
}
if (price !== 0) {
  //uppercase the name
  country = country.charAt(0).toUpperCase() + country.slice(1);
  alert('Доставка в ' + country + ' будет стоить ' + price + ' кредитов');
} else {
  alert('В вашей стране доставка не доступна');
}
