// ***********************
// SIGNIN STARTS FROM HERE
// ***********************

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }
  } 
  else {
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function logout(){
  firebase.auth().signOut();
}

// ***********************
// SIGNUP STARTS FROM HERE
// ***********************

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("ser_div").style.display = "block";
    document.getElementById("ogin_div").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("ser_para").innerHTML = "Welcome User : " + email_id;
    }
  } 
  else {
    document.getElementById("ser_div").style.display = "none";
    document.getElementById("ogin_div").style.display = "block";
  }
});

function ogin(){
  var userEmail = document.getElementById("mail_field").value;
  var userPass = document.getElementById("assword_field").value;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });

}
// ***************
// LOGOUT FUNCTION
// ***************
function logout(){
  firebase.auth().signOut();
}


// **************
// GOOGLE SIGN IN
// **************
googleSignIn = () => {
  base_provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(base_provider).then(function(result){
    console.log(result)
    console.log("success google account linked")
  }).catch(function(err){
    console.log(err)
    console.log("Failed to do")
  })
}

// facebook sign in

// {
//   status: 'connected',
//   authResponse: {
//       accessToken: '...',
//       expiresIn:'...',
//       signedRequest:'...',
//       userID:'...'
//   }
// }

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }
// ****************
// FACEBOOK SIGN_IN
// ****************
facebookSignIn = () => {
  base_provider = new firebase.auth.FacebookAuthProvider()
  firebase.auth().signInWithPopup(base_provider).then(function(result){
    console.log(result)
    console.log("success facebook account linked")
  }).catch(function(err){
    console.log(err)
    console.log("Failed to do")
  })
}

