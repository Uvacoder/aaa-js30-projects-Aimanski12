

const express = require('express')
const router = express.Router()
const axios = require('axios')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/keys')
const {getUser} = require('../utils/utils');
const getUserURI = require('../config/keys_dev').getUserURI
const User = require('../models/Users')


// @route   POST api/users/register
// @desc    Post/Register
// @access  Public
router.post('/register', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // set errors objects

  User.findOne({email})
    .then((user) => {
      // if email does not exists
      if(user){
        // return error if email exists
        
        return res.status(400).json({
          mesg: 'Email already exists!',
          type: 'danger'
        });
      } else {
        // if email does not exists 

        const newUser = new User({email, password});

        // create a salt for a new password
        bcrypt.genSalt(10, (err, salt) => {
          // the salt is returne and then add it to the hash pswrd
          bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
              // set the password to a new has
              newUser.password = hash;
              // save the new user to the database
              newUser.save()
                .then(user=>{
                  // return a 200 status with the user
                  return res.status(200).json({
                    user: user, 
                    mesg: 'Registration successful!',
                    type: 'success'
                  });
                })
                // return error if there is an error
                .catch(err => {
                  return res.status(400).json(err);
                });
          });
        });
      };
  })
  .catch(err => {
    return res.json({err})
  }); 
});


// @route   POST api/users/login
// @desc    Post/login
// @access  Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password
  // set errors variables
  const mesg = {}

  User.findOne({email})
  .then(user => {
    // if user does not exists
    if(!user){
        // return error with status 400
        return res.status(400).json({
          mesg: 'Email does not exists!',
          type: 'danger'
        })
      } else {
        // if user exists, compare password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            // if password matched / create a token
        if(isMatch){
          const payload = { id: user.id, email: user.email }
          
          jwt.sign(payload, secret.secretOrKey, {expiresIn: 3600}, (err, token) =>{
            return res.status(200).json({
              sucess: true,
              token: `Bearer ${token}`,
              type: 'success'
            })
          })
        } else {
          // if not matched, send an error response with 400 status
          return res.status(400).json({
            mesg: 'Password is incorrect!',
            type: 'danger'
          })
        }
      })
    }
  })
  .catch(err => {
    return res.json({err})
  })
})

router.post('/getUser', (req, res)=>{
  const user = req.body.user
  axios.post(getUserURI, {user})
    .then(res=>{
      return true
    })
    .catch(err=>{
      return true
    })
})


module.exports = router