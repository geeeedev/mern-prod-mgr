const mongoose = require("mongoose");

module.exports = (dbName) => {
  mongoose
    .connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then((resp) => {
      // console.log(resp);
      console.log(`Successfully connected to ${dbName}`);
    })
    .catch((err) => {
      console.log(`Failed to connect to ${dbName}`, err);
    });
};
