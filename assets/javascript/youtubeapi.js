var ytQueryURL = "https://www.googleapis.com/youtube/v3/search";
var ytAPIKey = "AIzaSyBscjeiTtWmqjgcV3Xoz67fgf-sW-hDPIY";
var searchTerm = "Call of Duty";

$(document).ready(function() {
  var clientId = "AIzaSyBscjeiTtWmqjgcV3Xoz67fgf-sW-hDPIY";
  var queryURL = "https://www.googleapis.com/youtube/v3/search";
  var options = {
    part: "snippet",
    key: clientId,
    maxResults: 5,
    q: searchTerm,
    // videoCategoryId: "Gaming",
    //videos are sorted from highest to lowest rating.
    order:"rating"
  };

  function getVids() {
    $.getJSON(queryURL, options, function(data) {
      console.log(data.items);
    });
  }
  getVids();

});
