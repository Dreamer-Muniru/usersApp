import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBBoztqor7AWtGDr8n8TTD7HCcUoQLafGY",
    authDomain: "usersapp-ad0df.firebaseapp.com",
    databaseURL: "https://usersapp-ad0df.firebaseio.com",
    projectId: "usersapp-ad0df",
    storageBucket: "usersapp-ad0df.appspot.com",
    messagingSenderId: "37274494287",
    appId: "1:37274494287:web:f6e09e5f397812dc28513a"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;