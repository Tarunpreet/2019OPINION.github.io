window.onload=function(){
    document.getElementById('open').addEventListener('click',function()
    {
        document.querySelector(".bg-modal").style.display='flex';
    });
    document.getElementById('close').addEventListener('click',function()
    {
        document.querySelector(".bg-modal").style.display='none';
    });
  }
//   function onLoadGoogleCallback(){
//     gapi.load('auth2', function() {
//       auth2 = gapi.auth2.init({
//         client_id: '140143069103-52fmn4ve714ki3ejos6vhjhjp10f3cea.apps.googleusercontent.com',
//         cookiepolicy: 'single_host_origin',
//         scope: 'profile'
//       });
  
//     auth2.attachClickHandler(element, {},
//       function(googleUser) {
//           console.log('Signed in: ' + googleUser.getBasicProfile().getName());
//         }, function(error) {
//           console.log('Sign-in error', error);
//         }
//       );
//     });
  
//     element = document.getElementById('btn');}
var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '140143069103-52fmn4ve714ki3ejos6vhjhjp10f3cea.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('btn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
         alert(JSON.stringify(error, undefined, 2));
        });
  } 

