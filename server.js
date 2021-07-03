import express from 'express';
import { Mongoose } from 'mongoose';
import path from 'path';
import { config } from 'config';


 const app = express();
 app.use(express.json());

 if(process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'));
     app.get('*', (req,res) => {
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
     });
 }

 const dbURI = config.get('dbURI');
 const port = process.env.PORT || 4000;
 Mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopoology: true, useCreateIndex: true})
 .then((result) => app.listen(port))
 .catch((err) => console.log(err));