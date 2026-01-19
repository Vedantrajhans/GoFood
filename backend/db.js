const mongoose = require("mongoose");

const mongoURI =
  "mongodb://vedantrajhans23:shriya23@cluster0-shard-00-00.o3zbe.mongodb.net:27017,cluster0-shard-00-01.o3zbe.mongodb.net:27017,cluster0-shard-00-02.o3zbe.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-so6lc5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("connected");

  const fetched_data = await mongoose.connection.db.collection("food_items");
  fetched_data.find({}).toArray(async function (err, data) {
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    foodCategory.find({}).toArray(function (err, catData) {
      if (err) {
        console.log(err);
      } else {
        global.foodData = data; // Changed from global.food_items
        global.foodCategory = catData;
        console.log("Food Data loaded:", data.length, "items");
        console.log("Categories loaded:", catData.length, "categories");
      }
    });
  });
};

module.exports = mongoDB;
