import express, { Request, Response } from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import mongoose from 'mongoose';
import keys from '../config/keys';
import { setUpRoutes } from './routes';
import './models/user';
import './services/passport';

mongoose.connect(keys.mongoURI).then(s => { console.log(`Successfully connected to mongodb`) }).catch(err => console.log(`error`, err));

const app: express.Application = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

setUpRoutes(app);

export default app;