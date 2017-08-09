<template>
    <div class="landing">
        <div class="contactContain col-sm-12 col-lg-12 col-xl-12">
            <h2 class="contactHeading francFont">FOR BOOKING CONTACT US AT</h2>
            <a href="mailto:superrobotparty@gmail.com"><h4 class="contactFont francFontBlack"><span>superrobotparty@gmail.com</span></h4></a>
            <h2 class="smMarginBottom contactHeading francFont">UPCOMING SHOWS</h2>
            <div class="row hey">
            <div class="widget_iframe col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 col-xl-10 col-xl-offset-1" style="display:inline-block;height:375px;padding:0;border:0;"><iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_4311172?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=custom" width="100%" height="100%" frameborder="0" scrolling="no" ></iframe></div></div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'app',
    mounted() {
        $('.c-hamburger').removeClass('is-active');
    },
}
</script>
<style lang="scss" scoped>
.contactFont {
    margin-top: 1.5%;
    flex: 1;
    line-height: .75;
    text-align: center;
}

.contactFont > span:hover {
    color: #1af0dc;
    cursor: pointer;
}

@media (min-width:1281px) {
    .contactHeading {
        margin-top: 7%;
    }
}

@media (min-width:1025px) {
    .contactContain {
        height:100vh;    
        overflow: hidden;
    }
}

.contactContain {
    background-color: pink;
    height:100vh;    
    overflow: hidden;
}

.francFontBlack {
    font-family: Francois One, sans-serif;
    color: black;
    text-shadow: 1px 1px grey;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .col-sm-12 {
        margin: 35px auto 0;
        padding-top: 15px;
    }

    .widget_iframe {
       height: 430px;
       margin-bottom: 15%;
    }

    .contactHeading {
        margin-top: 12%;
    }

    .smMarginBottom {
        margin-bottom: 2%;
    }
    .hey {
        overflow:hidden;
        margin-bottom:10%;
    }

    .contactContain {
        height: 100%;
    }
}
</style>

