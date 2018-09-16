var request = require("request");
var fs = require("fs");
require("dotenv").config();
var moment = require('moment');

// Parse out the task indicated
var task = process.argv[2];

// Parse out the thing the user is searching for
var input = process.argv.slice(3).join(" ");

function concert(input) {
    var url = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    var self = this;

    request(url, function (err, res, body){
        if (err) throw err;

        var data = JSON.parse(body);

        data.forEach(function(event) {
            // console.log(element);


        var display = [
            "\nShow: " + event.venue.name,
            "City: " + event.venue.city,
            "Region/State: " + event.venue.region,
            "Date: " + moment(event.datetime, moment.ISO_8601).format("L"),
        ].join('\n');
 
        console.log(display);
        // console.log(self.divider);

        fs.appendFile('log.txt', display + self.divider, function (err) {
            if (err) throw err;
            process.exit();
           
        })
    }); 

    })
};


switch (task) {
    case `concert-this`:
        concert(input);
        break;
    case `spotify-this-song`:
        day = "Monday";
        break;
    case `movie-this`:
        day = `movie-this`;
        break;
    case `do-what-it-says`:
        day = `do-what-it-says`;
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}