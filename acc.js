const firebaseConfig = {
  apiKey: "AIzaSyAnlaehIIwJdrigc52UVSpNLNAjE8uXTIY",
  authDomain: "allllllllllllllt1.firebaseapp.com",
  databaseURL: "https://allllllllllllllt1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "allllllllllllllt1",
  storageBucket: "allllllllllllllt1.appspot.com",
  messagingSenderId: "421102018561",
  appId: "1:421102018561:web:b348097d8560e7a1cda000",
  measurementId: "G-0XVGNYRT1M"
};
//cpnfigs the firebase allllllllllllllt1

firebase.initializeApp(firebaseConfig);
//initializes the firebase app to prepare it for the incoming data
var myDB = firebase.database().ref("Data");
//creates a variable called myDB and sets the data to our input "data"
function on(){
  myDB.set({
    "Condition":"on"
  });  
}
//creates the function when on set condition in firebase to on

function off(){
  myDB.set({
    "Condition":"off"
  });    
}
//creates the function when off set condition in firebase to off