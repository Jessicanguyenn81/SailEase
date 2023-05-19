require('dotenv').config();
require('./config/database');

const Restaurant = require('./models/restaurant');
const Excursion = require('./models/excursion');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Restaurant.deleteMany({});
  const restaurants = await Restaurant.create([
    { name: 'The Golden Spoon',
      picture: 'https://s3-media0.fl.yelpcdn.com/bphoto/Qm2FBhz3md0dyzQbDQWNVA/l.jpg', 
      restaurantType: 'Fine Dining'},
    { name: 'Pasta Paradiso',
      picture: 'https://s3-media0.fl.yelpcdn.com/bphoto/BCT1NUTlwCan0KTW1JmRIw/o.jpg', 
      restaurantType: 'Italian'},
  ]);
  await Excursion.deleteMany({});
  const excursions = await Excursion.create([
    { name: 'Water Sports',
      picture: 'https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      date: new Date(2023, 5, 19)},
    { name: 'Snorkeling',
      picture: 'https://images.pexels.com/photos/2121302/pexels-photo-2121302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      date: new Date(2023, 5, 22)},
  ]);



  process.exit();

})();