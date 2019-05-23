import express, { Request, Response } from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import keys from '../config/dev/keys';
import { setUpRoutes } from './routes';
import './models/user';
import './services/passport';

mongoose.connect(keys.mongoURI).then(s => { console.log(`Successfully connected to mongodb`) }).catch(err => console.log(`error`, err));

const app: express.Application = express();


console.log(`Setting up the routes`);
app.use(passport.initialize());
app.use(passport.session());

setUpRoutes(app);

export default app;