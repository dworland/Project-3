const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurants",
  {
    useMongoClient: true
  }
);

const restaurantSeed = [
  {
    restaurant: "Old Thousand",
    cuisine: "Chinese",
    address: "1000 E 11th St, Austin, TX 78702",
    phone: "(737) 222-6637",
    rating: 4,
    price: "$$", 
  },
  {
    restaurant: "Jade Restaurant",
    cuisine: "Chinese",
    address: "3801 N Capital Of Texas Hwy, Austin, TX 78746",
    phone: "(512) 956-8816",
    rating: 4.5,
    price: "$$",
  },
  {
    restaurant: "Nanking Restaurant",
    cuisine: "Chinese",
    address: "13450 N Hwy 183, Austin, TX 78750",
    phone: "(512) 331-1858",
    rating: 4,
    price: "$",
  },
  {
    restaurant: "Red Lotus Asian Grille",
    cuisine: "Chinese",
    address: "6507 Jester Blvd, Austin, TX 78750",
    phone: "(512) 494-4994",
    rating: 4.5,
    price: "$$",
  },
  {
    restaurant: "Hunan Bistro",
    cuisine: "Chinese",
    address: "10700 Anderson Mill Rd, Austin, TX 78750",
    phone: "(512) 579-0108",
    rating: 4,
    price: "$$",
  },
  {
    restaurant: "Me Con Bistro",
    cuisine: "Chinese",
    address: "3421 W William Cannon Dr, Austin, TX 78745",
    phone: "(512) 899-2390",
    rating: 4,
    price: "$$",
  },
  {
    restaurant: "China Cafe by Phoenix",
    cuisine: "Chinese",
    address: "3901 Spicewood Springs, Austin, TX 78759",
    phone: "(512) 345-1938",
    rating: 4,
    price: "$",
  },
  {
    restaurant: "Ho Ho Chinese BBQ",
    cuisine: "Chinese",
    address: "13000 N Ih-35, Austin, TX 78753",
    phone: "(512) 339-9088",
    rating: 3.5,
    price: "$$",
  },
  {
    restaurant: "First Chinese Barbecue",
    cuisine: "Chinese",
    address: "10901 N Lamar Blvd, Austin, TX 78753",
    phone: "(512) 835-8889",
    rating: 4,
    price: "$",
  },
  {
    restaurant: "New Fortune",
    cuisine: "Chinese",
    address: "10901 N Lamar Blvd, Austin, TX 78753",
    phone: "(512) 832-9992",
    rating: 4,
    price: "2",
  },
];

db.Restaruants
  .remove({})
  .then(() => db.Restaurants.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });