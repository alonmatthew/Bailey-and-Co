# Where 2 Wag

## **Description**

Is your dog a constant companion? Does your furry friend go where you go? Pretty awesome, huh? However, have you ever visited a restaurant, hotel or event and learned the place isn't friendly for Fido? If so, we have the app for you!!

Where 2 Wag is an app that allows you to post how dog-friendly a place is and search for places where you and your dog can eat/leisure at peace!

## **User Stories**

* As a user I need to be able to create a profile in the app
* As a user, I need a Homw Page that has:
	* Search Bar
		* By Category
		* By Location
		* Log In/Register links
* As a user, I need to search for a location and get sent to a results page retrieved throught the Yelp API
* As a user, I need to be able to see a location page that contains:
	* Location Address
	* Location Phone #
	* Location Neighborhood
	* Location Images
	* Previous Reviews
	* A star rating summary
*  	As a user, I need to be able to post a review and make the review visible to other users
*   As a user I need to be able to rate the location's dog-friendliness on a scale of 1-5
*   A a user, I need a registration/login flow that allows me to:
	* Login
	* Register
	* Edit Profile
	* Delete Profile

## **Wireframes**

#####Home Page
![Home Page](https://github.com/alonmatthew/Bailey-and-Co/blob/master/public/images/wireframe-1.png?raw=true)

#####Profile Page
![Profile Page](https://github.com/alonmatthew/Bailey-and-Co/blob/master/public/images/wireframe-2.png?raw=true)

#####Location Show Page 1
![Location Show Page](https://github.com/alonmatthew/Bailey-and-Co/blob/master/public/images/wireframe-3.png?raw=true)

#####Location Show Page 2
![Player2Wins](https://github.com/alonmatthew/Bailey-and-Co/blob/master/public/images/wireframe-4.png?raw=true)

## **Technologies/Tools Used**
* Node.js
* Express
* jQuery
* MongoDB
* Bootstrap
* EJS Templating Engine
* Yelp API (Search and Single Business Lookup)
* Google Maps API
* Passport (Authentication Middleware)
* Rating-Widget.com (star rating SaaS)
* Trello (Project Management)


## **Credit/References**
* **Yelp API v2.0**: [https://www.yelp.com/developers/documentation/v2/overview]()
* **Google Maps API**: [https://developers.google.com/maps/]()
* **Trello Board**: [https://trello.com/b/4Wzc8d5h/doge-yelp]()

## **Feature Backlog**
* Add tiles/containers for locations
* Include prepulated lists of locations and present on Home Page as categories (eg. "Top Dog Friendly Coffee Shops", "Best Beaches for Dogs", etc)
* User favorite locations
*

## **Known Bugs**
* Currently, a logged out user is able to rate/review. Need to implement login gateway in order for users to contribute content
