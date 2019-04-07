var auth = firebase.auth();
var database = firebase.database();
var userLogged = true;
var uid = "";
function setUid(id) {
  uid = id;

  console.log(uid);
}

$(document).ready(function() {
  // $(".modal").modal({
  //   onCloseEnd: onModalHide
  //  });
  $("#modal-login").modal({});
  $("#modal-signup").modal({});
  $("#game").modal({
    onCloseEnd: onGameModalHide
   });
});

$(document).on("click", ".card-panel", function() {
  console.log("clicked image");
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
  $.getJSON(searchOBJ.queryURL, searchOBJ.options, function(data) {
    const results = data.items;
    console.log(results);
    results.forEach(i => {
      let vidID = i.id.videoId;
      console.log(vidID);

      let vidTitle = i.snippet.title;
      console.log(vidTitle);

      let vidImg = i.snippet.thumbnails.default.url;
      console.log(vidImg);

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
var onGameModalHide = function() {
  console.log("Modal closed!");
  $("#game-image").attr("src", "" );
  $("#game-description").empty();
  $("#youtube-list").empty();
};
