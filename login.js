function login() {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    const message = document.getElementById("loginmessage");
    const userdata = {
      Email: email.value,
      Password: password.value,
    };
    if (userdata.Email === "") {
      message.innerHTML = "Please Write Your Email";
      message.style.color = "red";
    } else if (userdata.Password === "") {
      message.innerHTML = "Please Write Your Password";
      message.style.color = "red";
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(userdata.Email, userdata.Password)
        .then((resolve) => {
          message.innerHTML = "Successfully Login";
          message.style.color = "green";
          const user = firebase.auth().currentUser;
          if(user.emailVerified){
            window.location.assign("./home.html")
          }else{
            window.location.assign("./emailverified.html")
          }
        })
        .catch((error) => {
          message.innerHTML = error.message;
          message.style.color = "red"; 
        })
      function loginwithfacebook(){
        
      }
    }
  }