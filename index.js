const Taxi = require('./Taxi');

console.clear();

const jonas = new Taxi('Jonas');
const maryte = new Taxi('Maryte');
const stasys = new Taxi('Stasys');
const ona = new Taxi('Ona');

console.log(jonas.intro());
// Sveiki, as Jonas ir kilometro kaina su manimi yra 1.00 Eur.
console.log(maryte.intro());
// Sveiki, as Maryte ir kilometro kaina su manimi yra 1.00 Eur.
console.log(stasys.intro());
// Sveiki, as Stasys ir kilometro kaina su manimi yra 1.00 Eur.
console.log(ona.intro());
// Sveiki, as Ona ir kilometro kaina su manimi yra 1.00 Eur.

console.log('-------------------');

console.log(jonas.updatePrice(0.9));
// Jonas nustate nauja kilometro kaina - 0.90 Eur.
console.log(ona.updatePrice(2));
// Ona nustate nauja kilometro kaina - 2.00 Eur.
console.log(maryte.updatePrice(1.2));
// Maryte nustate nauja kilometro kaina - 1.20 Eur.

jonas.ride(5);
maryte.ride(7);
stasys.ride(2);
ona.ride(2);

console.log(jonas.stats());
// Jonas nuvaziavo 5 km ir uzdirbo 4.50 Eur.
console.log(maryte.stats());
// Maryte nuvaziavo 7 km ir uzdirbo 8.40 Eur.
console.log(stasys.stats());
// Stasys nuvaziavo 2 km ir uzdirbo 2.00 Eur.
console.log(ona.stats());
// Ona nuvaziavo 2 km ir uzdirbo 4.00 Eur.

console.log('-------------------');

maryte.ride(13);
stasys.ride(7);
jonas.ride(4);
ona.ride(15);
jonas.ride(5);
maryte.ride(3);
stasys.ride(12);
ona.ride(6);
jonas.ride(4);
maryte.ride(1);
stasys.ride(9);
ona.ride(10);

console.log(jonas.stats());
// Jonas nuvaziavo 18 km ir uzdirbo 16.20 Eur.
console.log(maryte.stats());
// Maryte nuvaziavo 24 km ir uzdirbo 28.80 Eur.
console.log(stasys.stats());
// Stasys nuvaziavo 30 km ir uzdirbo 30.00 Eur.
console.log(ona.stats());
// Ona nuvaziavo 33 km ir uzdirbo 66.00 Eur.

console.log('-------------------');

console.log(jonas.updatePrice(1.5));
// Jonas nustate nauja kilometro kaina - 1.50 Eur.
console.log(ona.updatePrice(2.3));
// Ona nustate nauja kilometro kaina - 2.30 Eur.
console.log(stasys.updatePrice(1.5));
// Stasys nustate nauja kilometro kaina - 1.50 Eur.

jonas.ride(5);
maryte.ride(3);
stasys.ride(12);
ona.ride(6);
jonas.ride(4);
maryte.ride(1);
stasys.ride(9);
ona.ride(10);

console.log(jonas.stats());
// Jonas nuvaziavo 27 km ir uzdirbo 29.70 Eur.
console.log(maryte.stats());
// Maryte nuvaziavo 28 km ir uzdirbo 33.60 Eur.
console.log(stasys.stats());
// Stasys nuvaziavo 51 km ir uzdirbo 61.50 Eur.
console.log(ona.stats());
// Ona nuvaziavo 49 km ir uzdirbo 102.80 Eur.