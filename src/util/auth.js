const passport = require('passport');
const { ExtractJwt } = require('passport-jwt');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use('signup',new localStrategy({
    usernameField:'email',
    passwordField: 'password'
},
async(email,password,done)=>{
    try{
        const user = await User.create({email,password});
        return done (null,user);
    }catch(err){
        console.log(err);
        done(err);
    }
}));

passport.use('login',new localStrategy(
    {
        usernameField:'email',
        passwordField: 'password'
    },
    async(email,password,done)=>{
        try{
            const user = await User.findOne({email});
            if(!user){
                return done (null,false,{message:'User Not Found'});
            }
            const validate = await user.isValidPassword(password);
            if(!validate){
                return done(null,user,{message:'Wronge Password'});
            }
            return done(null,user,{message:'Logged In Successfully'});
        }catch(err){
            console.log(err);
            return done(err);
        }
    }
))

passport.use(new JWTStrategy(
    {
        secretOrKey:'TOP_SECRET',
        jwtFromRequest:ExtractJwt.fromUrlQueryParameter('secret_token')
    },
    async(token,done)=>{
        try{
            return done(null,token.user);
        }catch(err){
            console.log(err);
            done(err);
        }
    }
))