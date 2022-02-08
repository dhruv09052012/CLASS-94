
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3SN6VDQkwrqQiLNySNLe44XgkObZ4mLA",
    authDomain: "kwitter-952e4.firebaseapp.com",
    databaseURL: "https://kwitter-952e4-default-rtdb.firebaseio.com",
    projectId: "kwitter-952e4",
    storageBucket: "kwitter-952e4.appspot.com",
    messagingSenderId: "636111265179",
    appId: "1:636111265179:web:3ef471973c0304fe2d153e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}