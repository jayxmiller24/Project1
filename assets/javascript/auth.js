var signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', function () {
    event.preventDefault();
    //get user info
    const email = signupForm['sign-email'].value;
    const password = signupForm['sign-password'].value;
    // console.log(email, password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function (credential) {
            const uid = credential.user.uid;
            console.log(credential.user.uid)
            const modal = document.querySelector('#modal-signup')
            database.ref('users/' + uid +'contact/').set({
                user_email: email
            },
                function (error) {
                    if (error) {
                        console.log("The write failed...");
                    } else {
                        console.log("Data saved successfully!");
                    }
                });
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        });
});

// logout user from the app
const logOutArray = document.querySelectorAll('.logout');
logOutArray.forEach(function (logout) {
    logout.addEventListener('click', function () {
        event.preventDefault();
        auth.signOut()
            .then(() => {
                console.log("user signed out");
                $(".logged-out").removeClass("hide");
                $(".logged-in").addClass("hide");
            });
    });
});

// log user in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', function () {
    event.preventDefault();
    // get user input
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    // console.log(email, password);
    $(".logged-out").addClass("hide");
    $(".logged-in").removeClass("hide");

    //sign user in
    auth.signInWithEmailAndPassword(email, password)
        .then(function (credential) {
            //  console.log(credential.user.uid);
            var uid = credential.user.uid;
            setUid(uid);
            // close login modal and reset form and hide login/ show logOut
            const modal = document.querySelector('#modal-login')
            // if ( document.URL.contains("favorite.html") ) {
            //     getFavorites();
            // }
            getFavorites();
            M.Modal.getInstance(modal).close();
            loginForm.reset();
        });
});

