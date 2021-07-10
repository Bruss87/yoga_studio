import express from 'express';
import { Mongoose } from 'mongoose';
import path from 'path';
import { config } from 'config';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import _ from 'loadash';
import fs from 'fs';
import path from 'path';


 const app = express();
 app.use(express.json());
 app.use(fileUpload({
     createParentPath: true
 }));
 app.use(corse());
 app.use(morgan('dev'));
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());




 if(process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'));
     app.get('*', (req,res) => {
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
     });
 }

 const dbURI = config.get('dbURI');
 const port = process.env.PORT || 4000;
 Mongoose.connect(dbURI, {
     useNewUrlParser: true, 
     useUnifiedTopoology: true, 
     useCreateIndex: true
    }).then(result => app.listen(port))
      .catch(err => console.log(err.message));

