# liri-node-app
Language Interpretation and Recognition Interface

This is a node.js project for the Full Stack Web Development Coding Boot Camp
at the University of MN.  It is intended to handle a few specific requests.

   * `concert-this`
   When liri is called with this as the first argument and a band name following,
   it should respond with details of upcoming concerts provided by bandsintown.

   * `spotify-this-song`
   This, when followed by a song name, should be responded to with details about the
   song.  This is currently not working well (it only produces one instance of 
   a song title followed by an error).  I think this has something to do with the
   environment variables and including dotenv.  The errors come from the error
   handling routines themselves, not the Spotify calls as far as I can tell.

   * `movie-this`
   This, when followed by a movie name, should give information from OMDB.

   * `do-what-it-says`
   This will take the arguments in the folder random.txt and handle them with
   liri as if they had been put into the console.

References
Github Repository:
https://github.com/michaelcumings/liri-node-app

GitHub Page:
https://michaelcumings.github.io/liri-node-app/

npm packages:
   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   
   * [Request](https://www.npmjs.com/package/request)

    Called with Request:
     * [OMDB API](http://www.omdbapi.com) 
     * [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
   
   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
