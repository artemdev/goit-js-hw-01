let price = 0;
let country = prompt('Ваша страна?');

if (country !== null) {
  country = country.toLowerCase();
}

const priceChina = '100';
const priceChili = '250';
const priceAustralia = '170';
const priceIndia = '80';
const priceJamayka = '120';

switch (country) {
  case 'китай':
    price = priceChina;
    break;
  case 'чили':
    price = priceChili;
    break;
  case 'австралия':
    price = priceAustralia;
    break;
  case 'индия':
    price = priceIndia;
    break;
  case 'ямайка':
    price = priceJamayka;
    break;
}
if (price !== 0) {
  //uppercase the name
  country = country.charAt(0).toUpperCase() + country.slice(1);
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
  alert('В вашей стране доставка не доступна');
}
