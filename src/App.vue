<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>SRP</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275863914&amp;auto_play=true&&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>
      <!-- <div class="panel-body">
        <img src="../srp.jpg" alt="Smiley face">
      </div>
      <div class="panel-body">
        <img src="../yellow.jpg" alt="Smiley face">
      </div> -->
      <div class="panel-body">
        <img src="../spaceman.jpg" class="img-fluid pic" alt="Responsive image">
      </div>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// var SC = require('soundcloud');

// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID',
// });

import Firebase from 'firebase'
let config = {
  apiKey: "AIzaSyB3f2NaIWLmStW14gtZ5daqu7q-NEwwrSw",
  authDomain: "superrobotparty-3b4af.firebaseapp.com",
  databaseURL: "https://superrobotparty-3b4af.firebaseio.com",
  projectId: "superrobotparty-3b4af",
  storageBucket: "superrobotparty-3b4af.appspot.com",
  messagingSenderId: "124706582401"
}

let app = Firebase.initializeApp(config);
let db = app.database();
let contactsRef = db.ref('contacts');

export default {
  name: 'app',
  firebase: {
    contacts: contactsRef
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.pic {
  max-width: 100%;
}

</style>
