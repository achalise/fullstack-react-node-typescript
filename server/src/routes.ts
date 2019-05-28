import { Application } from "express";
import {googleAuthHandler, googleCallbackHandler} from "./handlers/google-auth-handler";
import passport = require("passport");

export const setUpRoutes = (app: Application) => {
    app.get('/auth/google', googleAuthHandler);
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
          res.redirect('/test');
        }
      );
    app.get('/test', (req, res) => {
        console.log(`Executing route test`);
        res.send({message: 'hello'});
    });
    app.get('/api/current-user', (req, res) => {
      console.log(`Sending current user`);
      res.send(req.user || {});
    })
}
