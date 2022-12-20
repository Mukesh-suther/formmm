function signup() {
  const Name = document.getElementById("username");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");
  const Message = document.getElementById("message");

  if (Name.value === "") {
    Message.innerHTML = "Please Write Your Name";
    Message.style.color = "red";
  } else if (email.value === "") {
    Message.innerHTML = "Please Write Your Email";
    Message.style.color = "red";
  } else if (password.value === "") {
    Message.innerHTML = "Please Write Your Password";
    Message.style.color = "red";
  } else {
    const userdata = {
      Name: Name.value,
      Email: email.value,
      Password: password.value,
    };
    console.log(userdata);
    firebase
      .auth()
      .createUserWithEmailAndPassword(userdata.Email, userdata.Password)
      .then((resolve) => {
        Message.innerHTML = "Successfully Signup";
        Message.style.color = "green";
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {
          if (user.emailVerified) {
            window.location.assign("./home.html")
          } 
          else {
            window.location.assign("./emailverified.html");
          }
        });
      })
      .catch((error) => {
        Message.innerHTML = error.message;
        Message.style.color = "red";
      });
  }
}
