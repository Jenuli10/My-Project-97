
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCYVt6l8LCOIigcS9D7bux_0sjLqFWePok",
  authDomain: "covid-19-sose.firebaseapp.com",
  databaseURL: "https://covid-19-sose-default-rtdb.firebaseio.com",
  projectId: "covid-19-sose",
  storageBucket: "covid-19-sose.appspot.com",
  messagingSenderId: "489190724049",
  appId: "1:489190724049:web:b7946ae4598c60c86e90f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "quickpost_room.html";

}