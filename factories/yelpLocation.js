const
  request = require('request'),
  n = require('nonce')(),
  oauthSignature = require('oauth-signature'),
  qs = require('querystring'),
  _ = require('lodash')

module.exports = {
  request_yelpLocation,
  search
}

  //Yelp API integration

  /* Function for yelp call
   * ------------------------
   * set_parameters: object with params to search
   * callback: callback(error, response, body)
   */
function search(searchCriteria) {
  console.log(searchCriteria)
  return new Promise((resolve, reject) => {
    request_yelpLocation(searchCriteria, function(err, response, body) {
      if(err) { reject(err) }
      else {
        // console.log(JSON.parse(body))
        console.log(body)
        resolve(JSON.parse(body))
      }
    })
  })

}

function request_yelpLocation(set_parameters, callback) {
    /* The type of request */
    var httpMethod = 'GET';
    console.log(set_parameters);
    /* The url we are using for the request */
    var url = 'https://api.yelp.com/v2/business/' + set_parameters.id;
    set_parameters= {}

    /* We can setup default parameters here */
    var default_parameters = {
    };

    /* We set the require parameters here */
    var required_parameters = {
      oauth_consumer_key : process.env.OAUTH_CONSUMER_KEY,
      oauth_token : process.env.OAUTH_TOKEN,
      oauth_nonce : n(),
      oauth_timestamp : n().toString().substr(0,10),
      oauth_signature_method : 'HMAC-SHA1',
      oauth_version : '1.0'
    };

    /* We combine all the parameters in order of importance */
    var parameters = _.assign(default_parameters, set_parameters, required_parameters);
    // console.log(parameters)

    /* We set our secrets here */
    var consumerSecret = process.env.CONSUMER_SECRET
    var tokenSecret = process.env.TOKEN_SECRET

    /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
    /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
    var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

    /* We add the signature to the list of paramters */
    parameters.oauth_signature = signature;

    /* Then we turn the paramters object, to a query string */
    var paramURL = qs.stringify(parameters);

    /* Add the query string to the url */
    var apiURL = url+'?'+paramURL;
    console.log(apiURL)

    /* Then we use request to send make the API Request */
    request(apiURL, function(error, response, body){
      return callback(error, response, body);
      });
    };
