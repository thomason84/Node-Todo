// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    //findOneAndUpdate(filter, update, options, callback)
    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5c3d30ec6ba4957d5397cbb1")
        },
        {
          $set: {
            married: true,
            name: "Angela",
            petName: "Watson"
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // db.close();
  }
);
