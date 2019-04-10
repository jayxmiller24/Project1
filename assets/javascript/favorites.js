var uid = "";
function setfavUid(uid) {
    id = uid;
}


$(document).ready(function (event) {

    console.log(uid);

    if (uid !== "") {
        getFavorites();

    } else {
        console.log("Please sign in");

    }


});

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