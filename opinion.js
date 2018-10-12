var opinion = {};

(function(){
var firebase=app_firbase;
firebase.auth().onAuthStateChanged(function(user) {
    if(user) 
    {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } 
    else {
      // User is signed out.
      // ...
      window.location.replace("main.html");
    }
  });
  function logOut()
  {
      firebase.auth().signOut();
  }
  opinion.logOut=logOut;
})()

//
function openCity()
{
  document.getElementById('review_bjp').display='none';
  document.getElementById('review_cong').display='block';
}
function openCity1()
{
  document.getElementById('review_bjp').display='block';
  document.getElementById('review_cong').display='none';
}