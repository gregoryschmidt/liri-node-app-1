require("dotenv").config();
var request = require("request");
var fs = require("fs");
var moment = require('moment');
var keys = require("./keys")
var Spotify = require('node-spotify-api');

// Parse out the task indicated
var task = process.argv[2];

// Parse out the thing the user is searching for
var input = process.argv.slice(3).join(" ");

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

// console.log(keys.spotify.id);
// console.log(keys.spotify.secret);

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

function spotifyts(input) {
    if (!input) {
        input = "The Sign"
    }
    spotify
        .search({ type: 'track', query: input})
        .then(function(response) {
        var data = response;
        // console.log(window);
        for (i=0; i < data.tracks.items.length; i++) {

            var display = [
                "\nArtist: " + data.tracks.items[i].artists[0].name,
                "Song Name: " + data.tracks.items[i].name,
                "Spotify Link: " + data.tracks.items[i].preview_url,
                "Album: " + data.tracks.items[i].album.name,
            ].join('\n');
     
            console.log(display);

    
            fs.appendFile('log.txt', display + self.divider, function (err) {
                if (err) throw err;
                process.exit();
               
            })
        }; 

        })
        .catch(function(err) {
            console.log(err);
        })
      

}

function moviethis(input) {
    if (!input) {
        input = "Mr. Nobody";
    }
    var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + input;
    var self = this;

    request(url, function (err, res, body){
        if (err) throw err;

        var data = JSON.parse(body);

        // data.forEach(function(movie) {
            // console.log(element);
        var rtscore = 0;    
        for (i=0; i < data.Ratings.length; i++){
            if (data.Ratings[i].Source = "Rotten Tomatoes") {
                rtscore = data.Ratings[i].Value
            }
        }

        var display = [
            // * Title of the movie.
            "\nTitle: " + data.Title,
            // * Year the movie came out.
            "Year: " + data.Year,
            // * IMDB Rating of the movie.
            "IMDB Rating: " + data.imdbRating,
            // * Rotten Tomatoes Rating of the movie.
            "Rotten Tomatoes Rating: " + rtscore,
            // * Country where the movie was produced.
            "Country: " + data.Country,
            // * Language of the movie.
            "Language: " + data.Language,
            // * Plot of the movie.
            "Plot: " + data.Plot,
            // * Actors in the movie.
            "Actors: " + data.Actors,
        ].join('\n');
 
        console.log(display);
        // console.log(self.divider);

        fs.appendFile('log.txt', display + self.divider, function (err) {
            if (err) throw err;
            process.exit();
           
        })
    }); 

}

function dwis() {
    var array1 = fs.readFileSync('random.txt').toString().split(",");
    task = array1[0];
    input = array1[1];
    switch (task) {
        case `concert-this`:
            concert(input);
            break;
        case `spotify-this-song`:
            spotifyts(input);
            break;
        case `movie-this`:
            moviethis(input);
            break;
    }
    }      

switch (task) {
    case `concert-this`:
        concert(input);
        break;
    case `spotify-this-song`:
        spotifyts(input);
        break;
    case `movie-this`:
        moviethis(input);
        break;
    case `do-what-it-says`:
        dwis();
        break;
}