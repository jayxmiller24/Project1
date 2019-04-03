var config = {
  apiKey: "AIzaSyDbZLvUgQlFQjfrop7h_fUC0Z-97CKM5UY",
  authDomain: "game-tinder.firebaseapp.com",
  databaseURL: "https://game-tinder.firebaseio.com",
  projectId: "game-tinder",
  storageBucket: "",
  messagingSenderId: "812307683576"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {



  // var userName = "";
  // var email = "";
  // database.ref().on("child_added", function (snapshot) {

  //   var sv = snapshot.val();


  //   $("#loginemail").text(sv.email);
  //   //console.log(sv.username);
  //   //console.log(sv.email);


  // })
  // $("#signup").on("click", function (event) {
  //   event.preventDefault();
  //   userName = $("#user").val().trim();
  //   email = $("#email").val().trim();

  //   //console.log(userName);
  //   //console.log(email);
  //   if (userName === "" || email === "") {
  //     console.log("please type in an email and username");

  //   }
  //   else {

  //     database.ref().push({
  //       username: userName,
  //       email: email,
  //       dateAdded: firebase.database.ServerValue.TIMESTAMP

  //     });
  //   }
  // });
})
