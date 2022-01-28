import express from 'express';
import mongoose from 'mongoose';
import router from './routes/router';
import cors from 'cors';

const app = express();
const connection = mongoose.connect(`mongodb://127.0.0.1/cloud`, {
  dbName: 'cloud'
});

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

connection.then(() => {
  app.listen(3000);
}).catch(reason => {
  console.error(reason);
});
