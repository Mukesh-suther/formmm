function loginwithfacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((resolve) =>{
    console.log(resolve)
  })
  .catch((error) =>{
    console.log(error)
  })
}