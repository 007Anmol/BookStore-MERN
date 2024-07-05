import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';
const app = express();
//Middleware for parsing request body
app.use(express.json());


//Middleware for handling CORS policy
//Option 1: Allow all Origins with default value of cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// );


app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Im Anmol');
});
app.use('/books',bookRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
   console.log('App connected to the database');
   app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
  })
  .catch((error) => {
   console.log(error);
  });
