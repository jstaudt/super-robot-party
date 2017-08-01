<template>
    <div class="landing">
        <div class="contactContain col-sm-12 col-lg-12 col-xl-12">
            <h2 class="contactHeading francFont">FOR BOOKING CONTACT US AT</h2>
            <a href="mailto:superrobotparty@gmail.com"><h4 class="contactFont francFontBlack"><span>superrobotparty@gmail.com</span></h4></a>
            <h2 class="smMarginBottom contactHeading francFont">UPCOMING SHOWS</h2>
            <div class="widget_iframe" style="display:inline-block;height:375px;margin:0;padding:0;border:0;"><iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_4311172?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=custom" width="100%" height="100%" frameborder="0" scrolling="no" ></iframe></div>
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
.widget_iframe {
    margin-top: 5%;
    margin-bottom: 15%;
}
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

@media (min-width:1281px)
  and (min-width:1025px) {
    .contactContain {
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
    }

    .widget_iframe {
        width:500px;
    }

    .contactHeading {
        margin-top: 7%;
    }
}
.contactContain {
    background-color: pink;
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
       width: 97%;
       margin-right: .75%;
       margin-left : .75%
    }

    .contactHeading {
        margin-top: 12%;
    }

    .smMarginBottom {
        margin-bottom: 0%;
    }
}
</style>

