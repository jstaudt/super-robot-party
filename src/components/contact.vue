<template>
    <div id="landing">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>CONTACT</h3>
                <!-- <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/275863914&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe> -->
            </div>
            <!-- <div class="panel-body">
            <img src="../srp.jpg" alt="Smiley face">
            </div>
            <div class="panel-body">
            <img src="../yellow.jpg" alt="Smiley face">
            </div> -->
                <!-- <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                email
                            </th>
                            <th>
                                message
                            </th>
                            <th>
                                name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="contact in contacts">
                            <td>
                                {{contact.email}}
                            </td>
                            <td>
                                {{contact.message}}
                            </td>
                            <td>
                                {{contact.name}}
                            </td>
                        </tr>
                    </tbody>
                </table> -->    
            
            <div class="panel-body contactForm">
                <form v-show="!submitted" id="form" class="form-inline" v-on:submit.prevent="addContact">
                    <div class="form-group">
                        <label for="contactName"></label>
                        <input type="text" id="contactName" class="form-control" v-model="newContact.name" placeholder="name">
                    </div>
                    <div class="form-group">
                        <label for="contactEmail"></label>
                        <input type="text" id="contactEmail" class="form-control" v-model="newContact.email" placeholder="email@email.com">
                    </div>
                    <!-- <div class="form-group">
                        <label for="contactMessage"></label>
                        <textarea class="form-control" id="contactMessage" rows="3" placeholder="message" maxlength="280"></textarea>
                    </div> -->
                    <input type="submit" class="btn btn-primary" value="initiate">
                </form>
                <ul class="errors">
                    <li v-show="!validation.name && !submitted">Name cannot be empty.</li>
                    <li v-show="!validation.email && !submitted">Please provide a valid email address.</li>
                    <li v-show="!!submitted" id="success">Your communication has been submitted.</li>
                </ul>

            </div>
            <!-- <img src="../assets/spaceMan.jpg" class="img-fluid pic" alt="Responsive image"> -->
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
let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export default {
    name: 'app',
    firebase: {
        contacts: contactsRef
    },
    data() {
        return {
            newContact: {
                email: '',
                message: '',
                name: ''
            },
            submitted: false
        }
    },
    // computed property for form validation state
    computed: {
        validation: function () {
            return {
                name: !!this.newContact.name.trim(),
                email: emailRE.test(this.newContact.email)
            }
        },
        isValid: function () {
            var validation = this.validation
            
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        }
    },
    methods: {
        addContact: function() {
            if (this.isValid) {
                contactsRef.push(this.newContact);
                this.newContact.email = '',
                this.newContact.message = '',
                this.newContact.name = ''
                this.submitted = true;
            }
        }
    }
}
</script>

<style scoped>
.contactForm {
    background-image:
    linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
    url("../assets/spaceMan.jpg");
}

ul {
  padding: 0;
  list-style: none;
}

.errors {
  color: #f00;
}
.errors #success {
    color: green;
}

</style>
