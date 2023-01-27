const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Router = express.Router();
const helpController = require("../../controllers/helpController");
Router.get("/help",helpController.helpDetails);

Router.post(
    '/signup',
    passport.authenticate('signup',{session:false}),
    async(req,res)=>{
        res.status(200).json({
            success:true,
            message : 'Signup Successful',
            data :{
                user:req.user
            }
        });
    });

Router.post(
    '/login',
    async(req,res,next)=>{
        passport.authenticate(
            'login',
            async(err,user,info)=>{
                try{
                    if(err || !user){
                        const error = new Error('Something went wrong');
                        return next(error);
                    }
                    req.login(
                        user,
                        {session:false},
                        async (err)=>{
                            if(err)return next(err);
                            const body ={_id:user._id,email:user.email};
                            const token = jwt.sign({user:body},'TOP_SECRET');
                            return res.status(200).json({
                                token,
                                success:true,
                                message:'Successfully Signed In'
                            });
                        }
                    )
                }catch (err){
                    console.log(err);
                    return next(err);
                }
            }
        )
    }
);


module.exports = Router;
