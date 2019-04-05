var auth = firebase.auth();
var database = firebase.database();
var userLogged = true;
var uid = "";
function setUid(id){
uid = id;

console.log(uid);
}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);


});
$(document).on("click", ".card", function(){
    console.log("clicked image");
    var cardImage= $(this).find("img");
    var mainTitle = $(this).find("h6").text();
    var mainP= $(this).find("p").text();
    console.log(cardImage);
    console.log(mainTitle);
    console.log(mainP);
    
    

    var imgSource = $(cardImage).attr("src");
    console.log(imgSource);
    var pFour = $("<p>");
    var header= $("<h6>");
    
    var modalImage = $("<img>");
    modalImage.append("#game");
    header.append("#game");
    pFour.append("#game");
   $("#game img").attr("src", imgSource);
   $("#game h6").text(mainTitle);
   $("#game p").text(mainP);
    
    

    $("#game").show();


  });

   

});


