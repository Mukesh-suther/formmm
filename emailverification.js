const firebaseConfig = {
    apiKey: "AIzaSyCx-cFCFQBkYBMWKbnZCSp8qRACbuVVOmk",
    authDomain: "form2-340a0.firebaseapp.com",
    databaseURL: "https://form2-340a0-default-rtdb.firebaseio.com",
    projectId: "form2-340a0",
    storageBucket: "form2-340a0.appspot.com",
    messagingSenderId: "802892484431",
    appId: "1:802892484431:web:8832a70547677bfd4a7f3a",
    measurementId: "G-TB5S01E3KY"
  };
firebase.initializeApp(firebaseConfig)
const user = firebase.auth().currentUser;
if(user.emailVerified){
    window.location.assign("./home.html")
}else{
    window.location.assign("./emailverified.html")
}