<template>
    <!-- <ul class="nav nav-pills">
        <li role="presentation"><router-link to="/">Home</router-link></li>
        <li role="presentation"><router-link to="/contact">Contact</router-link></li>
    </ul> -->
<nav class="navbar navbar-fixed-top navbar-inverse">
    <h3 v-show="isMobile" style="margin-left:42%;margin-top:15px;float:left;text-align: center;font-family: 'Orbitron', sans-serif;color: #1af0dc;">SRP</h3>
  <div class="container-fluid">
    <div class="navbar-header">
      <!-- <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button> -->
      <button v-show="isMobile" class="navbar-toggle c-hamburger c-hamburger--x" data-toggle="collapse" data-target="#myNavbar"><span>toggle menu</span></button>
      <!-- <router-link @click.native="closeMenu()" tag="li" active-class="active" exact to="/"><a class="navbar-brand">SRP</a></router-link> -->
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li  v-show="!isMobile" class="dropdown">
          <button class="dropdown-toggle c-hamburger c-hamburger--x" data-toggle="dropdown" href="#"><span>toggle menu</span></button>
          <ul class="dropdown-menu">
            <router-link @click.native="closeMenu()" tag="li" active-class="active" exact to="/"><a>HOME</a></router-link>
            <router-link @click.native="closeMenu()" tag="li" active-class="active" to="/contact"><a>CONTACT</a></router-link>
          </ul>
        </li>
        <router-link v-show="isMobile" @click.native="closeMenu()" tag="li" active-class="active" exact to="/"><a>HOME</a></router-link>
        <router-link v-show="isMobile" @click.native="closeMenu()" tag="li" active-class="active" to="/contact"><a>CONTACT</a></router-link>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        data() {
            return {
                vp: this.viewPort
            }
        },
        mounted () {
            "use strict";

            var toggles = document.querySelectorAll(".c-hamburger");
            //TODO replace w/ lodash fn
            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                this.toggleHandler(toggle);
            };
        },
        methods: {
            closeMenu: function() {
                $('.navbar-collapse').collapse('hide');
                if ($('.c-hamburger').hasClass('is-active')) $('.c-hamburger').removeClass('is-active');
            },
            toggleHandler: function(toggle) {
                var ev = this.isMobile ? "click" : "click";

                toggle.addEventListener( ev, function(e) {
                    e.preventDefault();
                    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }
        },
        computed: {
            isMobile: function() {
                return this.vp.width < 768;
            }
        },
        props: ['viewPort']
    }
</script>
<style lang="scss" scoped>
    .navbar {
       margin-bottom: 0px;
       background-color: transparent;
       background: transparent;
       border-color: transparent;
    }

    .navbar li { color: #000 }

    .dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover, .dropdown-menu{
        background-color: transparent;
        font-family: 'Orbitron', sans-serif;
         color: white;
    }

    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 480px)
        and (-webkit-min-device-pixel-ratio: 2) {
            dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover, .dropdown-menu{
                background-color: black;
            }

            .navbar {
               background-color: black;
               background: black;
               border-color: black;
            }
    }

    $button-width: 50px;                    // The width of the button area
    $button-height: $button-width;          // The height of the button area
    $bar-thickness: $button-width * 0.08;   // The thickness of the button bars
    $button-pad: $button-width * 0.1875;    // The left/right padding between button area and bars.
    $button-bar-space: $button-width * 0.125; // The spacing between button bars
    $button-transistion-duration: 0.2s;     // The transition duration

    $c-hamburger-line-color: white;
    $c-hamburger--x-bgcolor: transparent;
    $c-hamburger--x-bgcolor-hover: transparent;
    $c-hamburger--x-active-bgcolor: transparent;
    $c-hamburger--x-active-bgcolor-hover: transparent;

    // Base/unclicked hamburger icon
    .c-hamburger {
      display: block;
      position: relative;
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: $button-width;
      height: $button-height;
      font-size: 0;
      text-indent: -9999px;
      appearance: none;
      box-shadow: none;
      border-radius: none;
      border: none;
      cursor: pointer;
      transition: background $button-transistion-duration;
    }

    .c-hamburger:focus {
      outline: none;
    }

    .c-hamburger span {
      display: block;
      position: absolute;
      top: $button-width * 0.45833333;
      left: $button-pad;
      right: $button-pad;
      height: $bar-thickness;
      background: $c-hamburger-line-color;
    }

    .c-hamburger span::before,
    .c-hamburger span::after {
      position: absolute;
      display: block;
      left: 0;
      width: 100%;
      height: $bar-thickness;
      background-color: $c-hamburger-line-color;
      content: "";
    }

    .c-hamburger span::before {
      top: (-1) * $button-width * 0.2083333333;
    }

    .c-hamburger span::after {
      bottom: (-1) * $button-width * 0.2083333333;
    }

    // X (with hover colours) hamburger style and animation
    .c-hamburger--x {
      background-color: $c-hamburger--x-bgcolor;
    }

    .c-hamburger--x:hover {
      background-color: $c-hamburger--x-bgcolor-hover;
    }

    .c-hamburger--x span::before,
    .c-hamburger--x span::after {
      transition-duration: $button-transistion-duration, $button-transistion-duration;
      transition-delay: $button-transistion-duration, 0s;
    }

    .c-hamburger--x span::before {
      transition-property: top, transform;
    }

    .c-hamburger--x span::after {
      transition-property: bottom, transform;
    }

    /* active state, i.e. menu open */
    .c-hamburger--x.is-active {
      background-color:  $c-hamburger--x-active-bgcolor;
    }

    .c-hamburger--x.is-active:hover {
      background-color:  $c-hamburger--x-active-bgcolor-hover;
    }

    .c-hamburger--x.is-active span {
      background: none;
    }

    .c-hamburger--x.is-active span::before {
      top: 0;
      transform: rotate(45deg);
    }

    .c-hamburger--x.is-active span::after {
      bottom: 0;
      transform: rotate(-45deg);
    }

    .c-hamburger--x.is-active span::before,
    .c-hamburger--x.is-active span::after {
      transition-delay: 0s, $button-transistion-duration;
    }
</style>