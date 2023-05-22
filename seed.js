require('dotenv').config()
require('./config/database')

const Restaurant = require('./models/restaurant')
const Excursion = require('./models/excursion')
const Activity = require('./models/activity')
;(async function () {
  await Activity.deleteMany({})
  const activities = await Activity.create([
    { name: 'Dining', sortOrder: 10 },
    { name: 'Excursions', sortOrder: 20 }
  ])

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
  const excursions = await Excursion.create([
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
      name: "St. Peter's Square",
      picture:
        'https://i.pinimg.com/564x/eb/8c/fe/eb8cfeac834b9e2b7ef9d1925fca990d.jpg',
      description:
        "Experience the grandeur of St. Peter's Square, a magnificent place that captures the essence of Vatican City. As you enter this iconic plaza, marvel at the vast open space, framed by imposing colonnades and crowned by the towering presence of St. Peter's Basilica. Breathe in the atmosphere of history and spirituality that permeates the square, where countless pilgrims have gathered over the centuries. Admire the exquisite Egyptian obelisk at the center, witness the papal audience from the steps, and soak in the ambiance of this sacred destination. St. Peter's Square is a must-visit for its architectural splendor and its significance as a symbol of Catholicism.",
      price: 53,
      activity: activities[1],
      attire: 'No tank tops',
      insiderTip: 'Drink lots of water',
      accessible: true
    },
    {
      name: 'Civitacchia Foodie Walking Tour',
      picture:
        'https://i.pinimg.com/564x/ba/2f/4f/ba2f4f4a208b19081e1a16d5c3756ec2.jpg',
      description:
        "Embark on a delectable culinary journey through Civitacchia on a Foodie Walking Tour. Indulge in the rich flavors and authentic tastes of this charming Italian port city. Follow our expert guide as they lead you to hidden gems, local markets, and family-run eateries. Sample mouthwatering delicacies like freshly baked focaccia, artisanal cheeses, and exquisite seafood dishes. Sip on regional wines and savor the aroma of freshly brewed Italian coffee. Immerse yourself in the vibrant food culture of Civitacchia as you learn about the city's gastronomic traditions and meet passionate local food artisans. Let your taste buds guide you through this unforgettable food adventure.",
      price: 65,
      activity: activities[1],
      attire: 'Comfortable walking shoes',
      insiderTip: "Don't trip while eating!",
      accessible: false
    },
    {
      name: 'Bagnoregio Village with lunch',
      picture:
        'https://i.pinimg.com/564x/a8/bc/91/a8bc91cbf3cdecfb9e5a36df5cfa7565.jpg',
      description:
        'Escape to the enchanting Bagnoregio Village and experience the beauty of a hidden gem. Perched atop a rugged cliff, this ancient village captivates with its picturesque charm and breathtaking views. Stroll through narrow, winding streets, adorned with colorful flowers and historic buildings, as if stepping back in time. Indulge in a delightful lunch, savoring authentic local cuisine, and immerse yourself in the warm hospitality of the locals. With its unique blend of history, culture, and gastronomy, Bagnoregio Village promises an unforgettable day filled with beauty and delicious flavors.',
      price: 60,
      activity: activities[1],
      attire: 'Casual',
      insiderTip: 'Take lots of photos',
      accessible: true
    }
  ])

  process.exit()
})()
