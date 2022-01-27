const firebaseConfig = {
  apiKey: "AIzaSyC2w-VMP4fde63cvZK2iy9nrzXfAjYjnsw",
  authDomain: "kwitter-63ce0.firebaseapp.com",
  databaseURL: "https://kwitter-63ce0-default-rtdb.firebaseio.com",
  projectId: "kwitter-63ce0",
  storageBucket: "kwitter-63ce0.appspot.com",
  messagingSenderId: "882779696994",
  appId: "1:882779696994:web:cb211b93fc6d090710463b"
};

//ADD YOUR FIREBASE LINKS HERE
const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome "+user_name+"!";




function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.document().ref("/").child(room_name).update({purpose : "adding room name"});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
console.log("Room Name - " +room_names);
row = "<div class='room_name'id="+room_names+" onclick='redirectToRoomName(this.id)' > #"+room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}