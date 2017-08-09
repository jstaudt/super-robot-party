<template>
    <div class="landing">
        <div v-show="isMobile" class="videoWrapper topImg showCase col-sm-12">
            <youtube :video-id="videoId" :player-width="width" :player-height="height" :player-vars="vars" @ready="ready"></youtube>
            <div>
                <div>
                    <h1 v-show="!submitted" class="francFont">GET UPDATES FROM THE BAND</h1>
                </div>
                <form v-show="!submitted" id="form" class="form" v-on:submit.prevent="addContact" style="height:200px">
                    <div class="form-group">
                        <div class="mobileForm col-xs-12">
                            <label for="contactEmail"></label>
                            <input type="email" class="form-control contactEmail" required="true" v-model="newContact.email" placeholder="Enter Email">
                            <button class="custom-btn btn-1 francFont">SIGN UP</button>
                        </div>
                    </div>
                </form>
                <ul class="errors">
                    <li v-show="!!submitted" id="success">THANKS!  SIGN UP SUCESSFUL.</li>
                </ul>
            </div>
            <div class="social landing">
                <h3 class="francFont">SRP SOCIAL</h3>
                <a href="https://soundcloud.com/super-robot-party" target="_blank"><i class="fa fa-4x fa-soundcloud" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/superrobotparty" target="_blank"><i class="fa fa-4x fa-facebook-official" aria-hidden="true"></i></a>
                <a href="https://twitter.com/superrobotparty" target="_blank"><i class="fa fa-4x fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/superrobotparty/" target="_blank"><i class="fa fa-4x fa-instagram" aria-hidden="true"></i></a>
                <a href="https://superrobotparty.bandcamp.com/" target="_blank"><i class="fa fa-4x fa-bandcamp" aria-hidden="true"></i></a>
                <a href="https://www.reverbnation.com/superrobotparty/" target="_blank"><i class="fa fa-4x fa-star" aria-hidden="true"></i></a>
            </div>
        </div>
        <div v-show="!isMobile" class="showCase col-sm-12 col-lg-12 col-xl-12">
            <div style="vertical-align: middle;padding-top:25%;margin-bottom:4%;">
                <h1 class="banner" data-text="SUPER ROBOT PARTY">SUPER ROBOT PARTY</h1>
            </div>
            <div class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3" v-bind:style="belowFoldCenterStyle">
                <div>
                    <h1 v-show="!submitted" class="francFont">GET UPDATES FROM THE BAND</h1>
                </div>
                <form v-show="!submitted" id="form" class="form-inline" v-on:submit.prevent="addContact">
                    <div class="form-group">
                        <label for="contactEmail"></label>
                        <input type="email" class="form-control contactEmail" required="true" v-model="newContact.email" placeholder="Enter Email">
                    </div>
                    <button class="custom-btn btn-1 francFont">SIGN UP</button>
                </form>
                <ul class="errors">
                    <li v-show="!!submitted" id="success">THANKS!  SIGN UP SUCESSFUL.</li>
                </ul>
            </div>
            <div class="social landing ">
                <div class="col-xs-6 col-xs-offset-3 col-sm-6 col-sm-offset-3">
                    <h2 class="francFont">SRP SOCIAL</h2>
                    <a href="https://soundcloud.com/super-robot-party" target="_blank"><i class="fa fa-4x fa-soundcloud" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/superrobotparty" target="_blank"><i class="fa fa-4x fa-facebook-official" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/superrobotparty" target="_blank"><i class="fa fa-4x fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/superrobotparty/" target="_blank"><i class="fa fa-4x fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://superrobotparty.bandcamp.com/" target="_blank"><i class="fa fa-4x fa-bandcamp" aria-hidden="true"></i></a>
                    <a href="https://www.reverbnation.com/superrobotparty/" target="_blank"><i class="fa fa-4x fa-star" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    firebase: {
        contacts: contactsRef
    },
    data () {
        return {
            videoId: 'PU3gqLyBwpw',
            nextId: '',
            videos: [],
            width: '100%',
            height: '270px',
            vars: {
                showinfo:0,
                playsinline:1,
                controls:0,
                hidecontrols: 1,
                rel:0,
            },
            newContact: {
                email: '',
                message: '',
                name: ''
            },
            submitted: false,
            failedSubmission: false,
            vp: this.viewPort
        }
    },
    computed: {
        validation: function () {
            return {
                email: emailRE.test(this.newContact.email)
            }
        },
        isValid: function () {
            var validation = this.validation
            
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        },
        isMobile: function() {
            return this.vp.width < 768;
        },
        belowFoldCenterStyle: function() {
            return {
                // 'margin-top': 15 + 'px',
                // 'margin-bottom': 10 + '%'
                // top: this.vp.height + 'px'
                'overflow':'hidden'
            }
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
                this.failedSubmission = false;
            }
            else {
                this.failedSubmission = true;
            }
        },
        ready: function() {
            $('.c-hamburger').removeClass('is-active');
        }
    },
    props: ['viewPort']
}
</script>
<style lang="scss" scoped>
.social {
    background-repeat: no-repeat;
    background-size: cover;
    background-color: pink;
    padding-top: 15%;
    padding-bottom: 25%;
}

a > i {
    color: #1af0dc;
}

a > i:hover {
    color: black;
    cursor: pointer;
}
.mobileForm > .btn {
    margin-bottom:2px;
}

.belowFoldCenter {
    left: 0px;
    right: 0px;
}

@media (min-width:1281px)
  and (min-width:1025px) {
    .social > a > i {
        margin-right: .75%;
        margin-left: .75%;
        margin-top: 2%;
    }

    .social {
        padding-top: 10%;
        padding-bottom: 10%;
    }
}


.custom-btn {
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color:white;
}
/**** BTN No. 1 ****/
.btn-1 {border: 2px solid grey;}
.btn-1:hover {
  background: #000;
  color: #1af0dc;
  border: 2px solid #000;
}
.btn-1:active {top: 2px;}

.contactEmail {
    height: 46px;
    padding-top: 15px;
    padding-bottom: 15px;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

    .contactEmail {
        width: 50%;
        margin-right: 0px;
        display: inline-flex;
    }
}

.showCase {
    background: 
    rgb(0,0,0)
    -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.3) 0%,rgba(0,0,0,0) 100%);
    background: 
    rgb(0,0,0)
    -webkit-radial-gradient(center ellipse,  rgba(255,255,255,0.3) 0%,rgba(0,0,0,0) 100%);
    background: 
    rgb(0,0,0) 
    radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%,rgba(0,0,0,0) 100%);
    background-repeat: repeat no-repeat;
    background-size: 100% 170%;
    background-position: center bottom;
}

.contactForm {
    background-repeat: no-repeat;
    background-size: cover;
    background-image:
    /*linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),*/
    url("../assets/spaceMan.jpg");
}
.errors {
    color: white;
    font-family: Francois One, sans-serif;
    text-shadow: 2px 2px #f00;
    font-size: x-large;
}
.errors #success {
    color: white;
    font-family: Francois One, sans-serif;
    text-shadow: 2px 2px grey;
    font-size: large;
    margin-top: 5%;
}
ul {
  padding: 0;
  list-style: none;
}

.fullHeight {
    height: 100%;
}

.videowrapper {
    float: none;
    clear: both;
    width: 100%;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
}
.videowrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
:root {
  --f-size: 15;
  --f-unit: 1vmin;
  --f: calc(var(--f-size) * var(--f-unit));
  --bg: #181717; 
}

*, *::after, *::before {
  box-sizing: border-box;
}

.banner {
    font-family: 'Orbitron', sans-serif;
    flex: 1;
    line-height: .75;
    font-size: 72px;
    height: 500px;
    margin: auto;
    color: #1af0dc;
    text-align: center;
    transform: scaleX(var(--scale, 1));
    animation: glitch-p 11s infinite alternate;

    &::before,
    &::after {
    --top: 0;        // offset from top [0 - 10]
    --left: 0;       // offset from left [0.001 - 1]
    --v-height: 30%; // visible part

    --n-tenth: calc(var(--f-size) * .1 * var(--top));
    --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
    --b-cut: calc(var(--t-cut) + var(--v-height));

    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;

    transform: translateX(calc(var(--left) * 100%));

    // this helps to get rid of pixelization
    filter: drop-shadow(0 0 transparent); 

    text-shadow: calc(var(--left) * -3em) 0 .02em lime, 
                 calc(var(--left) * -6em) 0 .02em #ff00e1;

    background-color: var(--bg);
    clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
    } 

    &::before {
    animation: glitch-b 1.7s infinite alternate-reverse;
    }
    &::after {
    animation: glitch-a 3.1s infinite alternate;
    }
}
@keyframes glitch-p {
  17% { --scale: .87; }
  31% { --scale: 1.1; }
  37% { --scale: 1.3; }
  47% { --scale: .91; }
  87% { --scale: 1; }
}

@keyframes glitch-a {
  10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
  }
  20% {
    --left: .005;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
  }
  60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
  }
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
}

@keyframes glitch-b {
    10%,30%,50%,70%,90% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
   --top: 10;
  }
  20% {
    --left: -.005;
  }
  40% {
    --left: -.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -.03;
    --v-height: 35%;
    --top: 6;
  }
  80% {
    --left: -.07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: -.083;
    --v-height: 30%;
    --top: 1;
  }
}
</style>
