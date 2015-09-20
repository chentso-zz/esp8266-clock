var cheerio = require("cheerio");
var express = require("express");
var request = require("request");
var app = express();
var child_process = require("child_process");


app.get('/clock/:country/:city', function (req, res) {
  var options = { method: 'GET'};
  options.url = "http://www.timeanddate.com/worldclock/" + req.params.country + "/" + req.params.city;
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

      /* Parse the date and time into a JSON object */
      var r = parseDateAndTime(body);
      
      res.setHeader("Content-type", "application/json");
      res.send(JSON.stringify(r));
  });
});

app.get('/', function(req, res) {
  console.log("root accessed");
});

function parseDateAndTime(timeAndDateHTML){
        /* Let cheerio parse the html */
      $ = cheerio.load(timeAndDateHTML);
  
      /* Create response object */
      var r = {};
      
      /* Save the time as a text as-is for response */
      r.time = $('#ct').text();
      
      var timeString = r.time.toLowerCase().trim();
      
      /* Determine if this is am or pm */
      var isPM = timeString.indexOf("pm");
      
      /* remove am/pm string */
      t = timeString.replace("pm", "").replace("am", "").trim();
      
      /* split the time string using ':' */
      var timeSplitted = t.split(":");
      
      /* Get the hour in 24-format, min, and seconds*/
      r.hour = parseInt(timeSplitted[0]);
      if (isPM) r.hour = r.hour + 12;
      r.min = parseInt(timeSplitted[1]);
      r.sec = parseInt(timeSplitted[2]);
      
      return r;
}


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

