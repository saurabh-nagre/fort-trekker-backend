const mongoose = require('mongoose');


const profileSchema = mongoose.Schema({
  user_id : {
    type :mongoose.Schema.Types.ObjectId,
    require : true,
    unique:true,
  },
  email: {
    type: String,
    require: true,
    unique : true,
  },
  username: {
    type :String,
    require : true,
    unique:true,
  },
  account_created: {
    type: mongoose.Schema.Types.Date,
    require :true,
  },
  password_hash:{
    type: String,
  },
  login_method: {
    type: String,
    enum: ['google_sign_in','password'],
    require:true,
  },
})

const UserProfile = mongoose.model('UserProfile',profileSchema);

module.exports = UserProfile;