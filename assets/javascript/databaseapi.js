$(document).ready(function () {

  
  //var gameUrl = "https://www.giantbomb.com/api/search/";
  //var apiKey = "2c81a4645598e2c114827c1fef8965cdd7309c04";
  //var apiKeyParameter = "?api_key="
  //var searchParameters = "&query="
  //var game = ""
  //var gameParameters = "&format=JSON"
  //var resources = "&resources=game"
  //var queryUrl = gameUrl + apiKeyParameter + apiKey + gameParameters + searchParameters + game + resources;
  
  
  
  
  $("#searchbutton").on("click", function (event) {
    event.preventDefault();
    
    
    var searchTerm = $("#search").val()
    //console.log(searchTerm);
    var queryURL = "https://www.giantbomb.com/api/search/?api_key=2c81a4645598e2c114827c1fef8965cdd7309c04&format=JSON&query=" + searchTerm + "&resources=game"
    //console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "jsonp",
      jsonp: "json_callback",
      data: {
        "format": "jsonp",
      }
    }).then(function (response) {
      //console.log(response.results);
      var gameInfo = response.results;
      console.log(gameInfo);
      
    

    });



  });

});
