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

    // console.log(uid);

});

