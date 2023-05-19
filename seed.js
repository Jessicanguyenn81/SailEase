require('dotenv').config();
require('./config/database');

const Restaurant = require('./models/restaurant');
const Excursion = require('./models/excursion');
const Activity = require('./models/activity');
const Dining = require('./models/dining');

// IIFE
// Immediately Invoked Function Expression
(async function() {

  await Activity.deleteMany({});
  const activities = await Activity.create([
    {name: 'Dining', sortOrder: 10},
    {name: 'Excursions', sortOrder: 20},
  ])

  await Dining.deleteMany({});
  const diningOptions = await Dining.create([
    {name: 'Room Service', activity: activities[0]},
    {name: 'Restaurant', activity: activities[0]},
    {name: 'Bars and Lounge', activity: activities[0]},
  ])

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
      date: new Date(2023, 5, 19),
      activity: activities[1]
    },
    { name: 'Snorkeling',
      picture: 'https://images.pexels.com/photos/2121302/pexels-photo-2121302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      date: new Date(2023, 5, 22),
      activity: activities[1]
    },
  ]);



  process.exit();

})();