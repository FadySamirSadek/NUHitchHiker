function signIn(e) {
  e.preventDefault();
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password).then(function(value){
        window.location.href = '/dashboard.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
}
