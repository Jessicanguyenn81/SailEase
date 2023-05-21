require('dotenv').config()
require('./config/database')

const Restaurant = require('./models/restaurant')
const Excursion = require('./models/excusion')
// const Item = require('./models/item');

;(async function () {
  //   await Category.deleteMany({});
  //   const categories = await Category.create([
  //     {name: 'Dining', sortOrder: 10},
  //     {name: 'Excursion', sortOrder: 20},
  //     {name: 'Entertain', sortOrder: 30},
  //     {name: 'Shops', sortOrder: 40},
  //     {name: 'Activites', sortOrder: 50},
  //     {name: 'Spa', sortOrder: 60},
  //     {name: 'Fitness', sortOrder: 70},
  //   ]);
  await Restaurant.deleteMany({})
  const restaurants = await Restaurant.create([
    { name: 'Chops Grill', sortOrder: 10 },
    { name: 'Loco Fresh', sortOrder: 20 },
    { name: 'Coastal Kitchen', sortOrder: 30 },
    { name: 'Hooked Seafood', sortOrder: 40 },
    { name: 'Izumi Hibachi', sortOrder: 50 },
    { name: 'Jamies Italian', sortOrder: 60 }
  ])
  await Excursion.deleteMany({})
  const excursions = await Restaurant.create([
    {
      name: 'Roman Forum & Trevi Fountain',
      picture:
        'https://i.pinimg.com/564x/c7/c3/8f/c7c38f0ae4fc33a8eba4443553808ffe.jpg',
      description:
        'Explore the heart of ancient Rome at the Roman Forum, an archaeological wonder filled with the remnants of grand temples, ancient government buildings, and captivating history. Immerse yourself in the ruins where emperors once walked, and envision the vibrant life that once thrived here. Just a short stroll away, discover the mesmerizing Trevi Fountain, a masterpiece of Baroque artistry. Toss a coin into the fountain to ensure your return to this enchanting city. Lose yourself in the timeless allure of these iconic landmarks, as they transport you through centuries of Roman splendor.',
      price: 58,
      activity: activities[1],
      attire: 'Comfortable walking shoes',
      insiderTip: 'Bring a penny for the fountain',
      accessible: true
    },
    {
      name: 'Colosseum & Vatican',
      picture:
        'https://i.pinimg.com/564x/35/81/c9/3581c91342da1a6c005bb5840eddfd60.jpg',
      description:
        "Embark on a captivating journey through ancient and religious wonders with our Colosseum and Vatican Tour. Step into the legendary Colosseum, an architectural marvel that witnessed thrilling gladiatorial contests. Feel the atmosphere of ancient Rome as you explore its towering walls and underground chambers. Next, venture to the Vatican, the spiritual epicenter of Catholicism. Marvel at the awe-inspiring St. Peter's Basilica, adorned with stunning artworks and Michelangelo's masterpiece, the Pietà. Discover the treasures of the Vatican Museums, home to the iconic Sistine Chapel and its breathtaking ceiling frescoes. Immerse yourself in history, art, and spirituality as you delve into these world-renowned landmarks.",
      price: 55,
      activity: activities[1],
      attire: 'Sturdy shoes for uneven surfaces',
      insiderTip: 'Be wary of pickpockets',
      accessible: true
    },
    {
      name: 'Colosseum & Vatican',
      picture:
        'https://i.pinimg.com/564x/35/81/c9/3581c91342da1a6c005bb5840eddfd60.jpg',
      description:
        "Embark on a captivating journey through ancient and religious wonders with our Colosseum and Vatican Tour. Step into the legendary Colosseum, an architectural marvel that witnessed thrilling gladiatorial contests. Feel the atmosphere of ancient Rome as you explore its towering walls and underground chambers. Next, venture to the Vatican, the spiritual epicenter of Catholicism. Marvel at the awe-inspiring St. Peter's Basilica, adorned with stunning artworks and Michelangelo's masterpiece, the Pietà. Discover the treasures of the Vatican Museums, home to the iconic Sistine Chapel and its breathtaking ceiling frescoes. Immerse yourself in history, art, and spirituality as you delve into these world-renowned landmarks.",
      price: 55,
      activity: activities[1],
      attire: 'Sturdy shoes for uneven surfaces',
      insiderTip: 'Be wary of pickpockets',
      accessible: true
    }
  ])

  // await RestaurantItem.deleteMany({})
  // const restaurantItems = await Item.create([
  //   { name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95 },
  //   {
  //     name: 'Turkey Sandwich',
  //     emoji: '🥪',
  //     category: categories[0],
  //     price: 6.95
  //   },
  //   { name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95 },
  //   { name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95 },
  //   {
  //     name: 'Fried Shrimp',
  //     emoji: '🍤',
  //     category: categories[1],
  //     price: 13.95
  //   },
  //   {
  //     name: 'Whole Lobster',
  //     emoji: '🦞',
  //     category: categories[1],
  //     price: 25.95
  //   },
  //   { name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95 },
  //   { name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95 },
  //   { name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95 },
  //   { name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95 },
  //   { name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95 },
  //   { name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95 },
  //   { name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95 },
  //   { name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95 },
  //   { name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95 },
  //   { name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95 },
  //   {
  //     name: 'Strawberry Shortcake',
  //     emoji: '🍰',
  //     category: categories[5],
  //     price: 3.95
  //   },
  //   { name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95 },
  //   { name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95 },
  //   { name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95 },
  //   { name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95 },
  //   { name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95 }
  // ])

  // console.log(items)

  process.exit()
})()
