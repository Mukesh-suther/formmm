function logout() {
   firebase.auth().signOut().then((success) => {
      console.log(success)
    }).catch((error) => {
      console.log(error)
    });
}