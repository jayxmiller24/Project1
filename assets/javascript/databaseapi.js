$(document).ready(function () {

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
      console.log(response.results);
      var results = response.results;
      //console.log(results)
      $("#appear-here").empty();
      for (var i = 0; i < results.length; i++) {


        var gameDiv = $("<div class='card'>");
        gameDiv.attr("style", "width: 18rem")
        var title = $("<h6>").text(results[i].name)
        //title.addClass("card-title");
        //var gameDiv2 = ("<div class='card-body'>");


        //var rating = original_game_rating[0].name
        //var pOne = $("<p>").text("Rating: " + rating)

        var pThree = $("<p>");
        $(pThree).text("Description: " + results[i].deck);
        pThree.addClass("card-text");

        var gameImage = $("<img>");

        gameImage.attr({ src: results[i].image.medium_url, class: "card-img-top" });


        ;
        //gameDiv.prepend(pOne)
        gameDiv.append(gameImage);
        gameDiv.append(title)
        //gameDiv2.append(pThree);
        gameDiv.append(pThree);




        $("#appear-here").prepend(gameDiv);

      }





    });

  }
  displayInfo();
});
