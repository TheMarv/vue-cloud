import express from 'express';
import mongoose from 'mongoose';

const app = express();

const connection = mongoose.connect(`mongodb://127.0.0.1/cloud`, {
  dbName: 'cloud'
});

connection.then(() => {
  app.listen(3000);
}).catch(reason => {
  console.error(reason);
});
