const { get } = require("mongoose");
var unirest = require("unirest");

var req = unirest("GET", "https://hotels4.p.rapidapi.com/locations/search");

const getRestaurants = (city)=>{

    return new Promise((resolve, reject)=>{
        req.query({
            "query": city,
            "locale": "en_US"
        });
        
        req.headers({
            "x-rapidapi-key": "b655dcf2a8mshb002681cedfe162p1be5d2jsn5534aecaf5a2",
            "x-rapidapi-host": "hotels4.p.rapidapi.com",
            "useQueryString": true
        });
        
        
        req.end(function (res) {
            if (res.error) reject(res.error);
        
            console.log(res.body);
            resolve(res.body)
        });
    })

}

module.exports = getRestaurants;