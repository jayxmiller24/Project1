var id = "";
function setfavUid(uid) {
  id = uid;
}
$(document).ready(function () {
    console.log(id);

    if (id !== "") {
        getFavorites();
        
    } else {
        console.log("Please sign in");
        
    }


});

function getFavorites () {
    database.ref("users/" + id).once("child_added", function (snapShot) {
        snapShot.forEach(function (childSnapShot) {
            let storedGame = childSnapShot.val();
            console.log(storedGame);

            let gameName = storedGame.gameName;
            console.log(gameName);


        });
    });
}