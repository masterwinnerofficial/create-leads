import express from 'express';
import morgan from 'morgan';
import { router }  from './routes/routes';
import { connection } from './db/db.mongoose';

const app = express();

app.use(express.json());  

app.use(morgan('dev'));
app.use('/api', router);


connection()
const port = process.env.PORT || 4200;



export { app, port };
