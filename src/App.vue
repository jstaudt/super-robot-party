<template>
    <div class="container">
        <div class="row">
            <div>
                <h1 class="srpBanner">SRP</h1>
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue';
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
body {
    width: 100%;
}
.srpBanner {
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

#landing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding-left: 0px
}

.v-enter, .v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .srpBanner {
        margin-top: 20px;
    }
}

</style>