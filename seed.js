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
    { name: 'Roman Forum', sortOrder: 10 },
    { name: 'Bagnoregio Village', sortOrder: 20 },
    { name: 'Colosseum', sortOrder: 30 },
    { name: 'St Peters Square', sortOrder: 40 },
    { name: 'Civitavechhia Foodie', sortOrder: 50 }
  ])

  await RestaurantItem.deleteMany({})
  const restaurantItems = await Item.create([
    { name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95 },
    {
      name: 'Turkey Sandwich',
      emoji: '🥪',
      category: categories[0],
      price: 6.95
    },
    { name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95 },
    { name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95 },
    {
      name: 'Fried Shrimp',
      emoji: '🍤',
      category: categories[1],
      price: 13.95
    },
    {
      name: 'Whole Lobster',
      emoji: '🦞',
      category: categories[1],
      price: 25.95
    },
    { name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95 },
    { name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95 },
    { name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95 },
    { name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95 },
    { name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95 },
    { name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95 },
    { name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95 },
    { name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95 },
    { name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95 },
    {
      name: 'Strawberry Shortcake',
      emoji: '🍰',
      category: categories[5],
      price: 3.95
    },
    { name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95 },
    { name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95 },
    { name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95 },
    { name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95 },
    { name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95 }
  ])

  console.log(items)

  process.exit()
})()
