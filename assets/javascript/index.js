var auth = firebase.auth();
var database = firebase.database();
var userLoggedIn = false;
var uid = "";
function setUid(id) {
  uid = id;
  // console.log(uid);
}

$(document).ready(function () {
  // Initialize Materialize js
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $("#modal-login").modal({});
  $("#modal-signup").modal({});
  $("#game").modal({
    onCloseEnd: onGameModalHide
  });

});

$(document).on("click", ".card-panel", function () {
  // console.log("clicked image");
  var cardImage = $(this).find("img");
  var mainTitle = $(this)
    .find("h6")
    .text();
  var mainP = $(this)
    .find("p")
    .text();
  // console.log(cardImage);
  // console.log(mainTitle);
  // console.log(mainP);

  var imgSource = $(cardImage).attr("src");
  // console.log(imgSource);
  $("#game img").attr("src", imgSource);
  $("#game h4").text(mainTitle);
  $("#game p").text(mainP);

  //console.log(mainTitle);

  const searchOBJ = searchQuery(mainTitle);
  $.getJSON(searchOBJ.queryURL, searchOBJ.options, function (data) {
    const results = data.items;
    // console.log(results);
    results.forEach(i => {
      let vidID = i.id.videoId;
      // console.log(vidID);

      let vidTitle = i.snippet.title;
      // console.log(vidTitle);

      let vidImg = i.snippet.thumbnails.default.url;
      // console.log(vidImg);

      let modalDiv = $("#youtube-list");
      let newDiv = $("<div>");
      let newheader = $("<h6>");
      let newImage = $("<img>");
      newDiv.attr("id", vidID);
      newImage.attr("src", vidImg);
      newDiv.append(newImage);
      newheader.text(vidTitle);
      newDiv.append(newheader);
      modalDiv.append(newDiv);
    });
  });
});

// function to clear game modal when switching games
var onGameModalHide = function () {
  // console.log("Modal closed!");
  $("#game-image").attr("src", "");
  $("#game-description").empty();
  $("#youtube-list").empty();
  $("#favorite-button").removeClass("hide");
  $("#saved-button").addClass("hide");
};
$("#search-button").on("click", function () {
  $(".favorites").addClass("hide");
  $(".search").removeClass("hide");
  $("#favs-here").empty();
});

$("#fav-page").on("click", function () {
  $(".search").addClass("hide");
  $(".favorites").removeClass("hide");
  $("#appear-here").empty();
});

$("#favorite-button").on("click", function () {
  // console.log("on fav click", uid);
  if (userLoggedIn === true) {
    let query = database.ref("users/" + uid).orderByChild("gameName");
    let gameName = $("#game-modal-header").text();
    let gameDeck = $("#game-image").attr("src");
    let gameDescription = $("#game-description").text();
    let favArray = [];
    query.once("value").then(function (snapShot) {
      snapShot.forEach(function (childSnapShot) {
        let childGameName = childSnapShot.val().gameName;
        console.log(childGameName);
        if (typeof childGameName !== "undefined") {
          console.log("game has been saved");
          favArray.push(childGameName);
        } else {
          console.log("value is undefined");
        }
        console.log(favArray);
      });
      gameIsFav();
    });
    var gameIsFav = function () {
      if ($.inArray(gameName, favArray) !== -1) {
        console.log("Game is a fav");
        displaySnackbar();
      } else {
        console.log("game is not a fav");
        addGameToFav();
      }
    };
    function addGameToFav() {
      database.ref("users/" + uid).push(
        {
          gameName: gameName,
          gameDeck: gameDeck,
          gameDescription: gameDescription
        },
        function (error) {
          if (error) {
            console.log("The write failed...");
          } else {
            console.log("Data saved successfully!");
          }
        }
      );
      $("#favorite-button").addClass("hide");
      $("#saved-button").removeClass("hide");
    }

  } else {
    let message = "Please Login or Signup first..";
    displaySnackbar(message);
  }
});

$("#fav-page").on("click", function () {
  getFavorites();
});

function displaySnackbar(message) {
  // Get the snackbar DIV
  var x = $("#snackbar-login");
  x.text(message);

  // Add the "show" class to DIV
  x.addClass("show");

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.removeClass("show");
  }, 3000);
}

function getFavorites() {
  database.ref("users/" + uid).once("value").then(function (snapShot) {
    snapShot.forEach(function (childSnapShot) {
      let storedGame = childSnapShot.val();
      // console.log(storedGame);
      let gameName = storedGame.gameName;
      let gameDeck = storedGame.gameDeck;
      // let gameDeck = gameDeckOBJ.toString();
      let gameDescription = storedGame.gameDescription;

      //console.log(gameDeck);

      let gameDiv = $("<div class='col s3 card-panel hoverable modal-trigger'>");
      gameDiv.attr("data-target", "game");
      let title = $("<h6>").text(gameName);
      let pThree = $("<p>");
      $(pThree).text("Description: " + gameDescription);
      pThree.addClass("card-text truncate");
      let gameImage = $("<img>");
      gameImage.attr("src", gameDeck);
      gameImage.addClass("card-image");
      gameDiv.append(gameImage);
      gameDiv.append(title)
      gameDiv.append(pThree);
      $("#favs-here").prepend(gameDiv);

    });
  });
}