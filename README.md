# Esp8266-Clock

Esp8266-Clock is a simple RESTful server implemented in NodeJS that extracts date/time into a JSON response so that ESP8266 boards are able to sync itself with a world clock for timing-related projects. The date and time are extracted from www.timeanddate.com using DOM-parsing node Cheerio package. This is typically implemented as a gateway between the ESP8266 module to the internet on a (Heroku-hosted example: http://esp8266-clock.herokuapp.com/clock/canada/vancouver)


This implementation uses timeanddate.com with provided country and city names to determine the clock, parses the time, and returns as a JSON object. This reduces the size of HTTP request response data for the ESP8266 module to download (20~40 kb depending on the world clock website down to roughly 300 bytes). The caveat is that delay can be introduced so the Esp8266-Clock server should not be used if timing requires sensitivity on the scale of a few seconds. 


### Version
0.0.1

### NodeJS Packages

Esp8266-Clock runs on NodeJS using the following packages

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Cheerio] - core jQuery for DOM parsing

### Installation

Node Package Manager (npm) and NodeJS (nodejs) will need to be installed

```sh
$ git clone https://github.com/chentso/esp8266-clock.git
$ cd esp8266-clock
$ npm install
$ npm start
```

Test with a browser on localhost using port 5000.



   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [Cheerio]: <https://github.com/cheeriojs/cheerio>
   
   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>



