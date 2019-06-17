const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DashboardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lists: [{
    list:{
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      default: 'pending'
    }    
  }],
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = Dashboard = mongoose.model('dashboards', DashboardSchema)