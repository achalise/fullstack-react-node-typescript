import passport from 'passport';
import keys from '../../config/keys';
import { User } from '../models/user';
//import strategy from 'passport-google-oauth20';
const strategy = require('passport-google-oauth20');
const GoogleStrategy = strategy.Strategy;


passport.serializeUser((user: { id: string }, done) => {
    console.log(`Serialising user`, user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = { id };
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken: string, refreshToken: string, profile: any, done: (...args: any) => {}) => {
    User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
            console.log(`User already exists `);
            done(null, user);
        } else {
            let user = new User();
            user.googleId = profile.id;
            user.save();
            done(null, user);

        }
    }).catch(err => console.log(err));
}));