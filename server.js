import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/users.route';
import connectToDb from './db/connect';
import config from './config/config.dev';

connectToDb();

const app = express();
const port = config.serverPort;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.listen(port, () => {
  console.info('App is running on port: ', port);
});
