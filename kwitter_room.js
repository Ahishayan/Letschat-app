
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBMCCQ6sGjOBb82MKlR-N3A2sT6c8aI128",
      authDomain: "kiwiter-copy.firebaseapp.com",
      databaseURL: "https://kiwiter-copy-default-rtdb.firebaseio.com",
      projectId: "kiwiter-copy",
      storageBucket: "kiwiter-copy.appspot.com",
      messagingSenderId: "856257144331",
      appId: "1:856257144331:web:a352e03cb4efcbe849890e",
      measurementId: "G-SB8NT1H99B"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  //GET THE NAME ME IN FUTURE-PAST YOU ME
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= user_name+"ヽ(゜▽゜　)－";

function getData() { firebase.database().ref("/").on('value', function(snapshot)  { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("room_name",Room_names);
row= "<div class='room_name' id='"+Room_names+"' onclick='redirect_room(this.id)'>"+Room_names+"</div>";
document.getElementById("output").innerHTML +=row;
  //End code
  });});}
getData();



function logout(){
  window.location = "index.html";
  localStorage.removeItem("room_name");
  }

function addroom(){
  room_name= document.getElementById("addroom").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"add room name"
  });
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";}


function redirect_room(id){
  localStorage.setItem("room_name",id);
  window.location = "kwitter_page.html";
}                       