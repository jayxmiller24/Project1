
// var ui = new firebaseui.auth.AuthUI(auth());
// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: '<url-to-redirect-to-on-success>',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     // firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//     // firebase.auth.PhoneAuthProvider.PROVIDER_ID
//   ]
// };

// ui.start('#firebaseui-auth-container', uiConfig);




var signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', function () {
    event.preventDefault();
    //get user info
    const email = signupForm['sign-email'].value;
    const password = signupForm['sign-password'].value;
    console.log(email, password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function (credential) {
            const uid = credential.user.uid;
            console.log(credential.user)
            const modal = document.querySelector('#modal-signup')
            database.ref().push({
                uid: uid
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
    console.log(email, password);
    $(".logged-out").addClass("hide");
    $(".logged-in").removeClass("hide");
    
    // $(".logged-out").on("click", function(){
        
    //     $(".logged-out").removeClass("hide");
    //     $(".logged-in").addClass("hide");

    // });

    //sign user in
    auth.signInWithEmailAndPassword(email, password)
        .then(function (credential) {
            //  console.log(credential.user.uid);
            var uid = credential.user.uid;
            setUid(uid);



            // close login modal and reset form and hide login/ show logOut
            const modal = document.querySelector('#modal-login')
            M.Modal.getInstance(modal).close();
            loginForm.reset();
        })

})

