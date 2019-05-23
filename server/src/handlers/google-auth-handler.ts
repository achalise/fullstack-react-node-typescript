import { Request, Response } from "express";
import passport = require("passport");

export const googleAuthHandler =  passport.authenticate('google', {
    scope: ['profile', 'email']
  })

export const googleCallbackHandler = (req: Request, res: Response) => {
    console.log(`Handled callback ..`);
    console.log(`the code ` + req.param('code'));
    res.send({staus: 'success'});
}
