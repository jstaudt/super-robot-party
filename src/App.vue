<template>
    <div class="container-fluid">
        <div class="row">
            <div class="fullHeight">
                <app-header :view-port='getViewport'></app-header>
                <router-view :view-port='getViewport'></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        data() {
            return {
                viewPort: {},
                viewPortWidth: 0,
                viewPortHeight: 0
            }
        },
        components: {
            appHeader: Header
        },
        computed: {
            getViewport: function() {
                // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
                if (typeof window.innerWidth != 'undefined') {
                    this.viewPortWidth = window.innerWidth,
                    this.viewPortHeight = window.innerHeight
                }

                // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
                else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !=
                'undefined' && document.documentElement.clientWidth != 0) {
                    this.viewPortWidth = document.documentElement.clientWidth,
                    this.viewPortHeight = document.documentElement.clientHeight
                }

                this.viewPort['width'] = this.viewPortWidth;
                this.viewPort['height'] = this.viewPortHeight;

                return this.viewPort;
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Francois+One|Orbitron');
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');

.francFont {
    font-family: Francois One, sans-serif;
    color: white;
    text-shadow: 3px 3px grey;
}

* {
  border-radius: 0 !important;
}

html,body {
    width: 100%;
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
}

a {
    text-decoration: none !important;
}

.container-fluid {
    min-height: 100%;
    height: 100%;
}
.row {
    height: 100%;
}

.topImg {
    margin: 35px auto 0;
    padding-top: 15px;
}

.col-lg-12, .col-xl-12, .col-sm-12 {
    padding-left: 0px;
    padding-right: 0px;
}

.landing {
    text-align: center;
    margin-top: 0px;
    padding-left: 0px;
    height: 100%;
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

input:focus {
    border: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

    .navbar-fixed-top {
        position: fixed;
        top: 0;
    }
    .navbar-collapse {
        max-height: none;
    }
    body {
        /*margin: 0;*/
        margin-top: 0px;
        position: absolute;
        bottom: 0;
        -webkit-overflow-scrolling: touch;
    }
}
</style>