$(document).ready(function () {
 
  $("#searchBar").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode === 13) {
      var searchTerm = $("#searchBar").val()
      displayInfo(searchTerm);
    }
  });
  $("#searchbutton").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#searchBar").val();
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
      // console.log(results)
      $("#appear-here").empty();
      var count= 0;
      var descount = 0;
      var titleCount= 0;
      
      for (var i = 0; i < results.length; i++) {
        count++
        descount++
        titleCount++
        
        var gameDiv = $("<div class='col s3 card-panel hoverable modal-trigger'>");
        gameDiv.attr("data-target", "game");
        var title = $("<h6>").text(results[i].name);
        
        title.attr("id", "title" + titleCount);
        
        var pThree = $("<p>");
        $(pThree).text("Description: " + results[i].deck);
        pThree.addClass("card-text truncate");
        pThree.attr("id", "description"+ descount);


        var gameImage = $("<img>");
        gameImage.attr({ src: results[i].image.medium_url, class: "card-image"});
        gameImage.attr("id", "game"+ count)
        gameImage.addClass("game-image");
        gameDiv.append(gameImage);
        // gameDiv.append(favoriteHeart);
        gameDiv.append(title)
        gameDiv.append(pThree);
        $("#appear-here").prepend(gameDiv);
      }
    });
  };
  
});
