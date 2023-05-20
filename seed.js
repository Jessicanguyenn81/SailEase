require('dotenv').config();
require('./config/database');

const Restaurant = require('./models/restaurant');
const Excursion = require('./models/excursion');
const Activity = require('./models/activity');
const Dining = require('./models/dining');
const City = require('./models/city');

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
    { name: 'Pantheon, Trevi Fountain & Roman Squares Walking Tour',
      picture: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/de/8d/01.jpg', 
      description: "From markets to fountains, ancient monuments to high-end boutiques, discover Rome’s dynamic and diverse public squares on this piazza-themed walking tour (headsets are included so you can hear your guide’s every word). Explore the elegant Piazza Navona and admire the millennia-old Pantheon, see the world-renowned Trevi Fountain and the iconic Spanish Steps, visit the bustling market in Campo de Fiori and the city’s Jewish Quarter, and much more. As you go, learn all about the city's wealth of history.",
      price: 58,
      activity: activities[1]
    },
    { name: 'Small-Group Ancient Rome and Colosseum Underground Tour',
      picture: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e5/04/19.jpg', 
      description: "Check out the Colosseum’s underground chambers and gladiator passageways on a tour of the sites that are normally off-limits to the general public. With a guide, you also visit the arena floor to see where the gladiatorial action took place. The experience ends with a tour of the Roman Forum, viewing temples and arches as you follow the footsteps of ancient senators and emperors.",
      price: 83,
      activity: activities[1]
    },
    { name: 'Skip-the-Line Vatican Museums & Sistine Chapel Group Tour',
      picture: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/f9/f6/a6.jpg', 
      description: "Discover the sacred and artistic treasures of the Vatican on an immersive tour led by an art historian guide. Skip the long lines with priority access, and see some of the most important masterpieces in the Vatican Museum’s immense collection. Stand in awe beneath Michelangelo’s frescoes in the Sistine Chapel, and learn the stories behind the art through an audio headset so you don’t miss a word of your guide’s commentary.",
      price: 49,
      activity: activities[1]
    },
    { name: "Tour of St Peter's Basilica with Dome Climb and Grottoes in a Small Group",
      picture: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/0c.jpg', 
      description: "Enjoy a rare bird’s-eye view over Rome with this tour of St. Peter’s Basilica that includes a climb to the top of its dome. Visit St. Peter’s Square and church with an art historian guide to marvel at its Renaissance art and architecture. Then head underground to see the grottoes and St. Peter's tomb before climbing the dome to admire the church interiors and the surrounding city from above.",
      price: 48,
      activity: activities[1]
    },
  ]);

  // await City.deleteMany({});
  // const cities = await City.create([
  //   {
  //     name: 'Rome'
  //   }
  // ])



  process.exit();

})();