
 function addUser(){
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
  });
}
 var firebaseConfig = {
    apiKey: "AIzaSyBpqFPd3VD1Xx9ivHnw67itrbMwOG3AiOI",
    authDomain: "practice2-c53ad.firebaseapp.com",
    databaseURL: "https://practice2-c53ad-default-rtdb.firebaseio.com",
    projectId: "practice2-c53ad",
    storageBucket: "practice2-c53ad.appspot.com",
    messagingSenderId: "536997611706",
    appId: "1:536997611706:web:5cdf53aae75e0d73535a83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);	

  