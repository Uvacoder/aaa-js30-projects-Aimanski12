

const express = require('express')
const passport = require('passport')
const router = express.Router()
const Utility = require('../utils/utils')

const Dashboard = require('../models/Dashboard')


// @route   POST api/lists/create
// @desc    POSTT/Lists
// @access  Private
router.post('/create', passport.authenticate('jwt', {session: false}),(req, res) =>{
  const mesg = {}
 
  
  Dashboard.findById({_id: req.body.dashId, user: req.user.id})
    .then(dashboard => {
      if(!dashboard){
        mesg.error = 'Dashboard is not found!'
        return res.status(400).json({mesg})
      }
      dashboard.lists.push({
        list: req.body.list
      })
        dashboard.save()
          .then(newDashboard => {
            return Utility(req.user.id, res)
          })
    })
    .catch(err => {
      mesg.error = err
      return res.status(400).json({mesg})
    })
})


// @route   PUT api/lists/update:id
// @desc    PUT/Lists
// @access  Private
router.put('/update/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
  const text = req.body.text
  const mesg = {}

  Dashboard.findById({_id: req.params.id})
    .then(dashboard =>{
        if(!dashboard){
          mesg.error = 'List is not found!'
          return res.status(400).json({mesg})
        } else {
          const listItem = dashboard.lists
          listItem.map(list => {
            if(list._id.toString() === req.body.dashId.toString()){
              return list.list = text
            } 
            return ({listItem, mesg})
          })
          dashboard.lists = listItem
          dashboard.save()
            .then(dashboardList => {
              return Utility(req.user.id, res)
            })
        }
      })
      .catch(err => {
        mesg.error = err
        res.status(400).json({mesg})
      })
})


// @route   PUT api/lists/updateList:id
// @desc    PUT/UPDATE specific list status
// @access  Private
router.put('/updateStatus/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
  const mesg = {}

  Dashboard.findById({_id: req.params.id})
    .then(dashboard =>{
        if(!dashboard){
          mesg.error = 'List is not found!'
          return res.status(400).json({mesg})
        } else {
          const listItem = dashboard.lists
          listItem.map(list => {
            if(list._id.toString() === req.body.listId.toString()){
              return list.status==='pending' ? list.status='done' : list.status==='done'? list.status='pending' : null
            } 
            return ({listItem, mesg})
          })
          dashboard.lists = listItem
          dashboard.save()
            .then(dashboardList => {
              return Utility(req.user.id, res)
            })
        }
      })
      .catch(err => {
        mesg.error = err
        res.status(400).json({mesg})
      })
})



// @route   DELETE api/lists/delete:id
// @desc    DELETE/Lists
// @access  Private
router.delete('/delete/:id/:dashId', passport.authenticate('jwt', {session: false}), (req, res) => {
 
  const mesg = {}

  Dashboard.findById({_id: req.params.id})
    .then(dashboard=>{
        if(!dashboard){
          mesg.error = 'List is not found!'
          return res.status(200).json({mesg})
        } else {
          const lists = dashboard.lists.filter(list => 
            list._id.toString() !== req.params.dashId.toString())
          dashboard.lists = lists
          dashboard.save()
            .then(dashboardList => {
              return Utility(req.user.id, res)
            })
        }
    })
    .catch(err=>{
      mesg.error = err
      res.status(400).json({mesg})
    })
})


module.exports = router