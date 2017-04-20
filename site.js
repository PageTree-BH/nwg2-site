
/*
global
PT:true, SITE:true,

ScrollMagic:true,
TimelineMax:true, TweenMax:true, TweenLite:true, SplitText:true,
Linear:true, Elastic:true, Power1:true, Power2:true, Power3:true, Power4:true, Bounce:true, Back:true,

FastClick:true, enquire:true, Justice:true,
Modernizr:true, jQuery:true, ssm:true,
YT:true

*/



// LET'S NOT IMPORT THIS HERE SO THAT WE DONT COMPILE IT EACH TIME.
// @codekit-prepend "pt/pt-base-v13.js"
// @codekit-append "site-navigation.js"


// @codekit-append "_thatnewnew/homepage.js"
// @codekit-append "_thatnewnew/buildBgVids.js"
// @codekit-append "_thatnewnew/homepage-video.js"


// @codekit-append "_thatnewnew/animatePageHeader.js"



// @codekit-append "_thatnewnew/buildYouTubeVid.js"



// @        codekit-append "sasskits/nwg-modal.js"



PT._isDevMode = true;

$(function() {

    NWG.init();

});









/*

    ##    ##    ##      ##     ######                       ####
    ###   ##    ##  ##  ##    ##    ##                     ##
    ####  ##    ##  ##  ##    ##              #####        ##
    ## ## ##    ##  ##  ##    ##   ####                   ###
    ##  ####    ##  ##  ##    ##    ##        #####        ##
    ##   ###    ##  ##  ##    ##    ##                     ##
    ##    ##     ###  ###      ######                       ####

*/


var NWG = {

    _VAR:''

    ,_isPlayingHPVideo:false

    // ,_SITE_NAV: $('#nwg-topbar')


    // ,_SITE_INTRO: $('#nwg-topbar')


    ,_ResetOBJs:[]

    ,_ResetSMs:[]

    ,_ResetTLMs:[]

    // ,_BuildFUNCs:[]
    //
    // ,_ResetFUNCs:[]





    ,init: function() {

        NWG.buildNavigation_();


        NWG.build_Events_Mini_Slider();



        PT._SSM.addStates([
            {
                id: 'nwg-md',
                query: '(min-width: 992px)',
                onEnter: function(){
                    PT.log('() () () () nwg-md : onEnter () () () ()', 'orange');

                    // NWG.buildHomeSectionAnimations();
                    //
                    // NWG.buildHeaderAnimations();
                    //
                    // NWG.buildSectionAnimations();
                    //
                    // NWG.buildArticleHeaderAnimations();
                    //
                    // NWG.buildArticleSectionAnimations();
                    //
                    // NWG.build_PageHeader_Events_Animations();
                    //
                    // NWG.build_Animate_Actions();
                    //
                    // NWG.build_Animations();

                },
                onLeave: function(){
                    PT.log('() () () () nwg-md : onLeave () () () ()', 'orange');
                    NWG.resetANIMATIONS();
                }
            }
        ]);


        // if(!Modernizr.touchevents){
        if(PT._SSM.isActive('nwg-md')){
            NWG.build_Homepage();
        }else{
            $('.preloader-cover').remove();
        }



    }










/*

    ########  ########  ######  ######## ########
    ##     ## ##       ##    ## ##          ##
    ##     ## ##       ##       ##          ##
    ########  ######    ######  ######      ##
    ##   ##   ##             ## ##          ##
    ##    ##  ##       ##    ## ##          ##
    ##     ## ########  ######  ########    ##


       ###    ##    ## #### ##     ##    ###    ######## ####  #######  ##    ##  ######
      ## ##   ###   ##  ##  ###   ###   ## ##      ##     ##  ##     ## ###   ## ##    ##
     ##   ##  ####  ##  ##  #### ####  ##   ##     ##     ##  ##     ## ####  ## ##
    ##     ## ## ## ##  ##  ## ### ## ##     ##    ##     ##  ##     ## ## ## ##  ######
    ######### ##  ####  ##  ##     ## #########    ##     ##  ##     ## ##  ####       ##
    ##     ## ##   ###  ##  ##     ## ##     ##    ##     ##  ##     ## ##   ### ##    ##
    ##     ## ##    ## #### ##     ## ##     ##    ##    ####  #######  ##    ##  ######

*/



    ,resetANIMATIONS: function() {
        PT.log('resetANIMATIONS()', 'orange');


        $.each( NWG._ResetSMs , function( index, value) {
            value.destroy(true);
        });

        $.each( NWG._ResetTLMs , function( index, value) {
            value.kill();
        });

        $.each( NWG._ResetOBJs , function( index, value) {
            $(value).removeAttr("style");
        });


        NWG._ResetSMs   = [];
        NWG._ResetTLMs  = [];
        NWG._ResetOBJs  = [];


    }

















/*

    ######## ##     ## ######## ##    ## ########  ######
    ##       ##     ## ##       ###   ##    ##    ##    ##
    ##       ##     ## ##       ####  ##    ##    ##
    ######   ##     ## ######   ## ## ##    ##     ######
    ##        ##   ##  ##       ##  ####    ##          ##
    ##         ## ##   ##       ##   ###    ##    ##    ##
    ########    ###    ######## ##    ##    ##     ######


   ##     ## #### ##    ## ####     ######  ##       #### ########  ######## ########
   ###   ###  ##  ###   ##  ##     ##    ## ##        ##  ##     ## ##       ##     ##
   #### ####  ##  ####  ##  ##     ##       ##        ##  ##     ## ##       ##     ##
   ## ### ##  ##  ## ## ##  ##      ######  ##        ##  ##     ## ######   ########
   ##     ##  ##  ##  ####  ##           ## ##        ##  ##     ## ##       ##   ##
   ##     ##  ##  ##   ###  ##     ##    ## ##        ##  ##     ## ##       ##    ##
   ##     ## #### ##    ## ####     ######  ######## #### ########  ######## ##     ##

*/

    ,build_Events_Mini_Slider: function() {
        PT.log('build_Events_Mini_Slider()', 'blue');


        $('[data-nwg-events-slider]').each(function(i, val){


            // $('#section-events-mini-slider').slick({
            $(this).slick({
                dots: false
                ,arrows: true
                ,infinite: true
                ,autoplay: true
                ,autoplaySpeed: 2000
                ,speed: 500
                ,slidesToShow: 1
                ,slidesToScroll: 1
                ,mobileFirst: true
                ,cssEase: 'ease-in-out'
                ,nextArrow: '<i class="myslickarrow-next fa fa-4x fa-chevron-right"></i>'
                ,prevArrow: '<i class="myslickarrow-prev fa fa-4x fa-chevron-left"></i>'
                ,responsive: [
                    // {
                    //     breakpoint: 600,
                    //     settings: {
                    //         slidesToShow: 2,
                    //         slidesToScroll: 1
                    //     }
                    // },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });





    }




















};








/*

   ####      ####             ##    ##    ##    ##      ##     ######
      ##     ####            ##     ###   ##    ##  ##  ##    ##    ##
      ##                    ##      ####  ##    ##  ##  ##    ##
      ###    ####          ##       ## ## ##    ##  ##  ##    ##   ####
      ##     ####         ##        ##  ####    ##  ##  ##    ##    ##
      ##      ##         ##         ##   ###    ##  ##  ##    ##    ##
   ####      ##         ##          ##    ##     ###  ###      ######


*/
