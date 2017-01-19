const
  express = require('express'),
  passport = require('passport'),
  userRouter = express.Router(),
  User = require('../models/User.js')

userRouter.route('/login')
  .get((req,res) => {
    res.render('login')
  })
  .post(passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login'
  }))

userRouter.route('/signup')
  .get((req,res) => {
    res.render('signup')
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }))

userRouter.get('/profile', (req,res) => {
  res.render('users/show')
})

// logout action and route
// userRouter.get('/logout', (req, res) => {
//   req.logout()
//   res.redirect('/')
// })

userRouter.get('/location/:id', (req,res) => {
  res.render('pages/location')
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next()
  req.flash('loginMessage', 'You must be logged in to see that.')
  res.redirect('/login')
}

module.exports = userRouter
