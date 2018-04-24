let config = {
  apiKey: "AIzaSyAxQRsuAzl-ho8uUUmPSvpcSzhab8KNAkw",
  authDomain: "nu-hitchhiker.firebaseapp.com",
  databaseURL: "https://nu-hitchhiker.firebaseio.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();
(function showRides() {
  console.log(database);
})();