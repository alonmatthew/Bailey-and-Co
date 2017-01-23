const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  methodOverride = require('method-override'),
  passport = require('passport'),
  passportConfig = require('./config/passport.js'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  flash = require('connect-flash'),
  ejsLayouts = require('express-ejs-layouts'),
  ejs = require('ejs'),
  dotenv = require('dotenv').load({silent: true}),
  session = require('express-session'),
  MongoDBStore = require('connect-mongodb-session')(session),
  yelp = require('./factories/yelp.js'),
  yelpLocation = require('./factories/yelpLocation.js'),
  userRoutes = require('./routes/users.js'),
  Review = require('./models/Review.js'),
  favicon = require('serve-favicon')


  port = process.env.PORT || 3000
  mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/bailey-and-co'

mongoose.connect(mongoConnectionString, (err) => {
  console.log(err|| "Connected to MongoDB(bailey-and-co)")

})

const store = new MongoDBStore({
  uri: mongoConnectionString,
  collection: 'sessions',
  collection: 'reviews'
});

// middleware
app.use(favicon(__dirname + '/public/images/logo-pic2.ico'))
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(flash())
app.use(session({
	secret: 'boooooooooom',
	cookie: {maxAge: 60000000},
	resave: true,
	saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// currentUser:
app.use((req, res, next) => {
	app.locals.currentUser = req.user
	app.locals.loggedIn = !!req.user

	next()
})

// ejs config
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/', userRoutes)


// server
app.listen(port, (err) => {
  console.log(err||"Server listening on PORT:" + port)
})
