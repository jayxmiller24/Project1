$(document).ready(function () {


  //var gameUrl = "https://www.giantbomb.com/api/search/";
  //var apiKey = "2c81a4645598e2c114827c1fef8965cdd7309c04";
  //var apiKeyParameter = "?api_key="
  //var searchParameters = "&query="
  //var game = ""
  //var gameParameters = "&format=JSON"
  //var resources = "&resources=game"
  //var queryUrl = gameUrl + apiKeyParameter + apiKey + gameParameters + searchParameters + game + resources;

  $("#search").keypress(function (event) {
    
    
    
    var keycode = (event.keyCode ? event.keyCode : event.which);
    
    
    if (keycode === 13) {
      var searchTerm = $("#search").val()
      displayInfo(searchTerm);

    }
  });
  $("#searchbutton").on("click", function (event) {
    event.preventDefault();

    var searchTerm = $("#search").val()
    //console.log(searchTerm);
    displayInfo(searchTerm);



  });
  

  function displayInfo(searchTerm) {
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
      var results = response.results;
      //console.log(results)
      $("#appear-here").empty();
      for (var i = 0; i < results.length; i++) {


        var gameDiv = $("<div class='col-sm-3'>");


        var p = $("<p>").text("Description: " + results[i].deck);

        var gameImage = $("<img>");

        gameImage.attr("src", results[i].image.icon_url);
        gameDiv.prepend(p);
        gameDiv.prepend(gameImage);

        $("#appear-here").prepend(gameDiv);

      }





    });
    
  }
  displayInfo();
});
