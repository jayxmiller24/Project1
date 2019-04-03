var auth = firebase.auth();
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
signupForm.addEventListener('submit', function(){
    event.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);
    
    // create user with auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function (credential){
            console.log(credential.user);
            signupForm.reset();
            // M.Modal(#).close();
        });
});

