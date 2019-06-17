

const express = require('express')
const passport = require('passport')
const router = express.Router()
const Utility = require('../utils/utils')

const Dashboard = require('../models/Dashboard')

// @route   GET api/dashboard
// @desc    GET/Dashboard
// @access  Private
router.get('/', passport.authenticate('jwt', {session: false}),  (req, res) => { 
  
  const mesg = {}

  Dashboard.find({user: req.user.id})
    .sort({date: 'descending'})
    .then(dashboard =>{
      if(dashboard.length === 0){
        mesg.message = `You don't have any dashboards!`
        return res.status(200).json({mesg})
      }
      return res.status(200).json({dashboard})
    })
    .catch(err => {
      mesg.error = err
      return res.status(200).json(mesg)
    })
})


// @route   POST api/dashboard
// @desc    POST/Dashboard
// @access  Private
router.post('/create', passport.authenticate('jwt', {session: false}), (req,res) => {
  
  const name = req.body.name;
  const user = req.user.id
  const mesg = {}

  const newDashboard = new Dashboard({user, name})
    newDashboard.save()
      .then(dashboard => {
        if(!dashboard){
          mesg.error = 'Dashboard was not created!'
          return res.status(200).json({mesg})
        } 
        return Utility(req.user.id, res)
      })
      .catch(err => {
        mesg.error = err
        return res.status(400).json({mesg})
      })

})


// @route   PUT api/dashboard
// @desc    PUT/Dashboard
// @access  Private
router.put('/update/:id',passport.authenticate('jwt',{session: false}), (req, res)=>{
  const mesg = {}

  Dashboard.findById({_id: req.params.id})
    .then(dashboard => {
      if(!dashboard){
          mesg.error = 'Dashboard is not found!'
          return res.status(400).json({mesg})
        } else {
          dashboard.name = req.body.name;
          dashboard.save()
            .then(newDashboard =>{
              return Utility(req.user.id, res)
            })
        }
    })
    .catch(err => {
      mesg.error = err
      return res.status(200).json({mesg})
    })
})


// @route   DELETE api/dashboard
// @desc    DEL/Dashboard
// @access  Private
router.delete('/delete/:id',passport.authenticate('jwt',{session: false}),(req,res)=>{

const id = req.params.id
const mesg = {}
  Dashboard.findOneAndDelete({_id: id})
    .then(dashboard=>{
        if(!dashboard){
          mesg.error = 'List is not found!'
          return res.status(200).json({mesg})
        } else {
          return Utility(req.user.id, res)
        }
    })
    .catch(err=>{
      mesg.error = err
      res.status(400).json({mesg})
    })
})


module.exports = router