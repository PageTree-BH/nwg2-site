
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



// @codekit-prepend "pt/pt-base-v11.js"

// @codekit-append "newnew-vids.js"


// @ - - codekit-append "sasskits/nwg-modal.js"


PT._isDevMode = true;


$(function() {




    NWG.init();




    // THIS FUNCTION WAS ADDED OUTSIDE/AFTER/SEPARATELY FROM THE NWG OBJECT{}:
    // NWG.helloTest();

    // PARALLAX ON MOUSE MOVE:
    // NWG.mouseParalaxBG();

    // console.log( "SSM.getState('sm') = " + PT._SSM.getState('sm').id );
    // console.log( "SSM.isActive('sm') = " + PT._SSM.isActive('sm') );
    // console.log( "PT.getSize() = " + PT.getSize() );


    // THIS IS A SIMPLE SLIDESHOW OF FADING IMAGES
    // NWG.simpleCycle('.simple-cycle');

    // PT.monitorFPS();

    // console.log( "SSM.isActive('md') = " + PT._SSM.isActive('md') );

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

    ,_BuildFUNCs:[]

    ,_ResetFUNCs:[]





    ,init: function() {
        // PT.log('SITE.init()');

        // NWG.build_Site_Intro();
        // NWG.build_Site_Homeplate_Intro();
        // $('.preloader-cover').remove();



        NWG.buildSIDR();

        NWG.build_Events_Mini_Slider();

        NWG.build_site_topbar();




            // MAYBE WE CHECK FOR TOUCH EVENTS:
            // if(!Modernizr.touchevents){

                PT._SSM.addStates([
                    {
                        id: 'md',
                        query: '(min-width: 992px)',
                        onEnter: function(){
                            PT.log('() () () () onEnter () () () ()');

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
                            PT.log('() () () () onLeave () () () ()');
                            NWG.resetANIMATIONS();
                        }
                    }
                ]);
            // }



        // NWG.buildArticleGALLERY();

        // NWG.build_data_scroll_to();


        // NWG.newFunction();




        // if(!Modernizr.touchevents){
        if(PT._SSM.isActive('md')){
            NWG.build_Site_Homeplate_Intro();
        }else{
            $('.preloader-cover').remove();
        }




    }












    ,newFunction: function() {
        PT.log('newFunction()');
    }





























/*

    #### ##    ## ######## ########   #######
     ##  ###   ##    ##    ##     ## ##     ##
     ##  ####  ##    ##    ##     ## ##     ##
     ##  ## ## ##    ##    ########  ##     ##
     ##  ##  ####    ##    ##   ##   ##     ##
     ##  ##   ###    ##    ##    ##  ##     ##
    #### ##    ##    ##    ##     ##  #######

*/


    ,build_Site_Homeplate_Intro: function() {

        PT.log('build_Site_Homeplate_Intro()');






        var ThisHP    = $('#homeplate');

        var hasIntroCookie = false;

        var ThisCOVER = $('.preloader-cover');




        // SIMPLE LITTLE COOKIE FRAMEWORK FROM MOZILLA:
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework

        if( docCookies.getItem('intro') ) {
            // console.log('~~~~~~~ yes cookie ~~~~~~~~');
            // hasIntroCookie = true;
        } else {
            // console.log('~~~~~~~ no cookie ~~~~~~~~')
            // hasIntroCookie = false;
        }




        // 20 SECONDS:
        // docCookies.setItem('intro', 'hello intro', 20);
        // ONE DAY:
        docCookies.setItem('intro', 'hello intro', 864e2, '/');




        if(ThisHP.length){
            if( (ThisHP.data('nwg-hpintro') === true) && ( !hasIntroCookie ) ){
                // console.log('ok, lettuce make an introduction.');
                okDO();
            }else{
                // console.log('Im sorry, there will be no introductions at this time.');
                if( ThisCOVER.length ) {
                    TweenMax.to(ThisCOVER, 1, {opacity:0, onComplete:okDONT});
                }
            }
        }



        function okDONT(){
            ThisCOVER.remove();
        }




        function okDO() {
            // console.log('okDO build intro ');

            $('body').addClass('noscroll');


            var ThisLOGO            = ThisHP.find('.homeplate-logoholder');
            var ThisLOGO_TEXT       = ThisLOGO.find('.logo-text');
            var ThisLOGO_GLOBE      = ThisLOGO.find('.logo-globe');

            var ThisBG      =   ThisHP.find('.homeplate-bg');

            // var ThisABOUT   =   $("#section-about");

            var ThisTOPBAR  =   $('#site-topbar');
ThisTOPBAR.css({ 'top' : -ThisTOPBAR.outerHeight()});

            var ThisBtn_TICKETS     =   ThisHP.find('.btn-tickets');
            var ThisBtn_VIDEO       =   ThisHP.find('.btn-video');


            var hp_h = ThisHP.innerHeight();


var loopThisMany = 2;
var i = 0;

            ThisLOGO._origL = ThisLOGO.position().left;
            ThisLOGO._origT = ThisLOGO.position().top;



            var ThisTLM_INTRO = new TimelineMax({
                paused:false
                ,ease:Linear.easeNone
                // ,repeat:-1
                // ,yoyo:true
                ,onComplete:function(){
                    ThisTLM_INTRO.kill();
                    ThisTLM_LOOP.play();
                }
                // ,onRepeat:ThisTLM_REPEAT
            });





            var ThisTLM_LOOP = new TimelineMax({
                paused:true
                ,ease:Linear.easeNone
                // ,repeat:-1
                // ,yoyo:true
                ,onComplete:function(){
                    console.log("LOOP COMPLETE FUNC()");
                    i++;
                    if((PT._isPreLoaded) && (loopThisMany >= i)){
                        // console.log(" DONE ");
                        ThisTLM_OUTRO.play();
                        this.kill();
                        $('body').removeClass('noscroll');
                    }else{
                        this.restart();
                    }

                }
                ,onReverseComplete:function(){
                    console.log("LOOP onReverseComplete FUNC()");
                }
                ,onRepeat:function(){
                    console.log("LOOP onRepeat FUNC()");
                    // i++;
                    // if((PT._isPreLoaded) && (loopThisMany >= i)){
                    //     // console.log(" DONE ");
                    //     ThisTLM_OUTRO.play();
                    //     this.kill();
                    //     $('body').removeClass('noscroll');
                    // }
                }
                // ,onRepeat:ThisTLM_REPEAT
            });




            var ThisTLM_OUTRO = new TimelineMax({
                paused:true
                ,ease:Linear.easeNone
                // ,repeat:-1
                // ,yoyo:true
                ,onComplete:function(){
                    // ThisTLM_INTRO.kill();
                    // ThisTLM_LOOP.kill();
                    ThisTLM_OUTRO.kill();
                    ThisCOVER.remove();
                }
                // ,onRepeat:ThisTLM_REPEAT
            });






    // INTRO :
    //
            ThisTLM_INTRO.set(ThisHP, {height:$(window).innerHeight() });

            // ThisTLM_INTRO.set([ThisBG, ThisABOUT], {autoAlpha:0 });

            ThisTLM_INTRO.to(ThisCOVER, 1, {delay:2, autoAlpha:0});


    // LOOP :
            ThisTLM_LOOP.fromTo(ThisLOGO_GLOBE, 0.2,   {alpha:0}, {alpha:0});
            ThisTLM_LOOP.fromTo(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0}, {scale:1.1, alpha:1, ease:Power1.easeOut}, 'a');
            ThisTLM_LOOP.fromTo(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0}, {scale:1.3, alpha:1, ease:Power1.easeOut}, 'a');
            ThisTLM_LOOP.to(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0, ease:Power1.easeIn}, 'aaa');
            ThisTLM_LOOP.to(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0, ease:Power1.easeIn}, 'aaa');


    // OUTRO :
            ThisTLM_OUTRO.fromTo(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0}, {scale:1.1, alpha:1, ease:Power1.easeOut}, 'aa');
            ThisTLM_OUTRO.fromTo(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0}, {scale:1.3, alpha:1, ease:Power1.easeOut}, 'aa');

            ThisTLM_OUTRO.to(ThisLOGO_GLOBE, 1.2,   {scale:1, alpha:1, ease:Power1.easeInOut}, 'c');
            ThisTLM_OUTRO.to(ThisLOGO_TEXT,  1, {scale:1, alpha:1, ease:Power1.easeInOut}, 'c');

            ThisTLM_OUTRO.to(ThisHP, 1, {height:hp_h, clearProps:'all'}, 'c' );

            ThisTLM_OUTRO.to(ThisBG, 1,  {autoAlpha:1}, 'c');


            ThisTLM_OUTRO.to([ThisLOGO_TEXT, ThisLOGO_GLOBE], 1, { rotation:0, scale:1, clearProps:'all' }, 'c');

            // ThisTLM_OUTRO.to(ThisABOUT,         1,  {autoAlpha:1}, 'c');

            ThisTLM_OUTRO.fromTo(ThisBtn_TICKETS,   0.5,  {opacity:0}, {  opacity:1 }, 'c+=0.2');
            ThisTLM_OUTRO.fromTo(ThisBtn_VIDEO,     0.8,  {opacity:0}, {  opacity:1 }, 'c+=0.2');

            ThisTLM_OUTRO.fromTo(ThisTOPBAR,            1,  {top:-ThisTOPBAR.outerHeight()}, {top:0, ease:Power1.easeOut}, 'c+=0.2' );

        }

    }













































/*

     ######  #### ######## ########    ########  #######  ########     ########     ###    ########
    ##    ##  ##     ##    ##             ##    ##     ## ##     ##    ##     ##   ## ##   ##     ##
    ##        ##     ##    ##             ##    ##     ## ##     ##    ##     ##  ##   ##  ##     ##
     ######   ##     ##    ######         ##    ##     ## ########     ########  ##     ## ########
          ##  ##     ##    ##             ##    ##     ## ##           ##     ## ######### ##   ##
    ##    ##  ##     ##    ##             ##    ##     ## ##           ##     ## ##     ## ##    ##
     ######  ####    ##    ########       ##     #######  ##           ########  ##     ## ##     ##

 */

    ,build_site_topbar: function() {

        // var HomePlate = $('#my-homeplate');

        var topBar = $('#site-topbar');
        var topBarHeight = "-" + topBar.outerHeight() + 'px';
        topBar.addClass('fixy-top');

        var triggerPos = 100;
        var i1 = 0;
        var i2 = 0;

        var myScene = new ScrollMagic.Scene();
        myScene.addTo(PT.SM_CTRL);
        myScene.on("update", function() {
            var x1 = PT.SM_CTRL.info("scrollDirection");
            var x2 = $(window).scrollTop();
            var x3 = triggerPos;

            if ( x1 === "REVERSE" && x2 >= x3 && i1 === 0) {
                // console.log("REVERSE");
                    TweenMax.fromTo(topBar, 0.6, {top: topBarHeight}, {top: "0px", ease: Power1.easeInOut});
                i1++;
                i2 = 0;
            }
            if ( x1 === "FORWARD" && x2 > x3 && i2 === 0) {
                // console.log("FORWARD");
                    TweenMax.fromTo(topBar, 0.6, {top: "0px"}, {top: topBarHeight, ease: Power1.easeInOut});
                i1 = 0;
                i2++;
            }
        });






    }

















/*

     ######  #### ########  ########     ##     ## ######## ##    ## ##     ##
    ##    ##  ##  ##     ## ##     ##    ###   ### ##       ###   ## ##     ##
    ##        ##  ##     ## ##     ##    #### #### ##       ####  ## ##     ##
     ######   ##  ##     ## ########     ## ### ## ######   ## ## ## ##     ##
          ##  ##  ##     ## ##   ##      ##     ## ##       ##  #### ##     ##
    ##    ##  ##  ##     ## ##    ##     ##     ## ##       ##   ### ##     ##
     ######  #### ########  ##     ##    ##     ## ######## ##    ##  #######

*/

    ,buildSIDR: function(){

            PT.log('buildSIDR()');

            // ADD A COVER TO THE PAGE TO SHOW WHEN THE MENU IS OPEN:
            $('body').prepend('<div class="sidr-cover"></div>');

            var _sidrCover = $('.sidr-cover');


            // SET THE COVER TINT TO INVISIBLE:
            TweenMax.set(_sidrCover, {autoAlpha:0});

            // INITIALLY, THIS IS SET TO DISPLAY:NONE TO PREVENT IT FLASHING ON SCREEN.
            $('#sidr-main').addClass('showme');


            // ON CLICK, CLOSE THE SIDR MENU:
            _sidrCover.on('click', function(e){
                $.sidr('close', 'sidr-main');
            });

            $('#sidr-close-btn').on('click', function(e){
                $.sidr('close', 'sidr-main');
            });



            // TURNS THE NESTED <ul>'s INTO ACCORDION NAV:
            // $('#sidr-main nav ul').navgoco();


            // THE ACTUAL SIDR MENU CODE:
            $('#sidr-menu-btn').sidr({

                // speed: 0.1
                speed: 300
                ,displace:false
                ,name:'sidr-main'
                ,side:'right'
                // ,body:'.viewport'

                ,onOpen: function () {
                    // console.log('onOpen');
                    TweenMax.to(_sidrCover, 0.2, {autoAlpha:1});

                    // $('html').removeClass('sidr-is-closed');
                    // $('html').addClass('sidr-is-open');
                }

                ,onClose: function () {
                    // console.log('onClose');
                    TweenMax.to(_sidrCover, 0.3, {autoAlpha:0});

                    // $('html').removeClass('sidr-is-open');
                    // $('html').addClass('sidr-is-closed');
                }

            });

        // }



        // function resizer() {
        //     console.log('resizer()');
        //     TweenMax.to(['.viewport', '#site-topbar'], 0.3, { left:$('#sidr-main').width() , width:$(window).width() - $('#sidr-main').width() });
        // }

        // function startResize() {
        //     console.log('startResize()');
        //     $(window).resize(resizer);
        //     TweenMax.to(['.viewport', '#site-topbar'], 0.3, { left:$('#sidr-main').width() , width:$(window).width() - $('#sidr-main').width() });
        // }

        // function endResize() {
        //     console.log('endResize()');
        //     $(window).off("resize", resizer);
        //     TweenMax.to(['.viewport','#site-topbar'], 0.3, { left:0, width:'100%' });
        // }

        // PT._SSM.addStates([
        //     {
        //         id: 'sidr-show',
        //         query: '(min-width: 1200px)',
        //         onEnter: function(){
        //             startResize();
        //             $.sidr('open', 'sidr-main');
        //         },
        //         onLeave: function(){
        //             endResize();
        //             $.sidr('close', 'sidr-main');
        //         }
        //     }
        // ]);



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
        PT.log('resetANIMATIONS()');


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
*
*
*

    ##     ##  #######  ##     ## ########    ########     ###     ######   ########
    ##     ## ##     ## ###   ### ##          ##     ##   ## ##   ##    ##  ##
    ##     ## ##     ## #### #### ##          ##     ##  ##   ##  ##        ##
    ######### ##     ## ## ### ## ######      ########  ##     ## ##   #### ######
    ##     ## ##     ## ##     ## ##          ##        ######### ##    ##  ##
    ##     ## ##     ## ##     ## ##          ##        ##     ## ##    ##  ##
    ##     ##  #######  ##     ## ########    ##        ##     ##  ######   ########

*
*
*/


    ,buildHomeSectionAnimations: function() {
        PT.log('buildHomeSectionAnimations()');
//

        if( $('body.page-home').length ){

            // buildHEADER();
            //
            // buildABOUT();
            //
            // buildFMX();
            //
            // buildSK8();
            //
            // buildBMX();

        }


        if( $('body.page-home-post').length ){

            // buildHEADER();
            //
            // buildFMX();
            //
            // buildSK8();
            //
            // buildBMX();

        }






/*

    #    # ######   ##   #####  ###### #####       ##   #    #   ##   #   #
    #    # #       #  #  #    # #      #    #     #  #  #    #  #  #   # #
    ###### #####  #    # #    # #####  #    #    #    # #    # #    #   #
    #    # #      ###### #    # #      #####     ###### # ## # ######   #
    #    # #      #    # #    # #      #   #     #    # ##  ## #    #   #
    #    # ###### #    # #####  ###### #    #    #    # #    # #    #   #

 */


        function buildHEADER(){
            PT.log('buildHEADER()');

            var ThisHP              =   $('#homeplate');

            var ThisBG              =   ThisHP.find('.homeplate-bg');

            var ThisLOGO            =   ThisHP.find('.homeplate-logoholder');

            var ThisBtn_TICKETS     =   ThisHP.find('.btn-tickets');
            var ThisBtn_VIDEO       =   ThisHP.find('.btn-video');





            var ThisTLM = new TimelineMax({ease:Linear.easeNone});

                // ThisTLM.to(ThisBtn_TICKETS,     0.3,    {top:'+=10px',   left:'-=200px',  opacity:0 }, 'a' );
                // ThisTLM.to(ThisBtn_VIDEO,       0.3,    {top:'-=5px',    left:'+=100px',   opacity:0 }, 'a' );

                // ThisTLM.fromTo(ThisBtn_TICKETS,     1,    {left:'0', opacity:1}, {   left:'-=200px',     opacity:0, ease:Power3.easeOut }, 'a' );
                // ThisTLM.fromTo(ThisBtn_VIDEO,       1,    {left:'0', opacity:1}, {   left:'+=100px',     opacity:0, ease:Power3.easeOut }, 'a' );

                // ThisTLM.to(ThisLOGO,            1,      {top:'+=300'}, 'a');

                ThisTLM.fromTo(ThisBG,          1,      {css:{top:'-15%'}}, {css:{top:'20%', opacity:0}}, 'a');


            var ThisDuration = ThisBG.outerHeight();

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: $('#homeplate')
                ,triggerHook:0
            })
            .offset( 10 )
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Home Header BG"});
            }


            ThisSCENE.on("enter", function (event) {
                // console.log("Scene entered.");
                // console.log(NWG._isPlayingHPVideo);

                if(NWG._isPlayingHPVideo){
                    // ThisSCENE.enabled(false);
                    ThisTLM.paused(true);
                }else{
                    // ThisSCENE.enabled(true);
                    ThisTLM.paused(false);
                }

            });


            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisBG);


        }










/*

       ##   #####   ####  #    # #####
      #  #  #    # #    # #    #   #
     #    # #####  #    # #    #   #
     ###### #    # #    # #    #   #
     #    # #    # #    # #    #   #
     #    # #####   ####   ####    #

 */


        function buildABOUT(){
            PT.log('buildABOUT()');

            var ThisTHING = $('#section-about .about-block');

            var ThisTRIGGER = $('#section-about');

            var ThisDURATION = ThisTRIGGER.outerHeight();

            var ThisTLM = new TimelineMax({ease:Power4.easeInOut});

                ThisTLM.to(ThisTHING, 1, { css:{top:'-20%'} }, 'a');


            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisTRIGGER
                ,triggerHook:0.85
            })
            // .offset( 10 )
            // .duration( ThisDURATION )
            .duration( 400 )
            // .addIndicators({name: "ABOUT BLOCK"})
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Home About Section"});
            }

            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisTHING);

        }






/*

     ###### #    # #    #
     #      ##  ##  #  #
     #####  # ## #   ##
     #      #    #   ##
     #      #    #  #  #
     #      #    # #    #

 */

        function buildFMX(){
            PT.log('buildFMX()');
            // var ThisPATH = [{x:0, y:0}, {x:250, y:250}, {x:500, y:1500}];

            var ThisSECTION = $('#section-fmx');
            var ThisHEADER  = $('#section-fmx .section-header');
            var ThisINFO    = $('#section-fmx .section-info');
            var ThisACTION  = $('#section-fmx .section-action');
            var ThisBG      = $('#section-fmx .section-bg');

            var ThisPERSON  = ThisACTION.find('.action-person');
            var ThisSHADOW  = ThisACTION.find('.action-shadow');




            var ThisTLM = new TimelineMax({ease:Linear.easeNone});

                ThisTLM.fromTo(ThisINFO,    1, {css:{top:'-15%'}}, {css:{top:'20%'  }}, 'a');
                ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'   }, 'a');


                ThisTLM.fromTo(ThisACTION,  1, {css:{left:'130%'} }, {css:{left:'-30%'} },'a');

                ThisTLM.fromTo(ThisPERSON,  1, {rotation:-100 }, {rotation:100 },'a');
                ThisTLM.fromTo(ThisSHADOW,  1, {rotation:-100 }, {rotation:100 },'a');



            var ThisDuration = ThisSECTION.outerHeight();


            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisSECTION
                ,triggerHook:0.8
            })
            .offset(140)
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);


            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Home FMX Section"});
            }





            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);

            NWG._ResetOBJs.push(ThisINFO);
            NWG._ResetOBJs.push(ThisACTION);
            NWG._ResetOBJs.push(ThisPERSON);
            NWG._ResetOBJs.push(ThisSHADOW);
            NWG._ResetOBJs.push(ThisHEADER);


        }






/*

                    #####
      ####  #    # #     #
     #      #   #  #     #
      ####  ####    #####
          # #  #   #     #
     #    # #   #  #     #
      ####  #    #  #####


*/

        function buildSK8(){
            PT.log('buildSK8()');

            var ThisSECTION = $('#section-sk8');
            var ThisHEADER  = $('#section-sk8 .section-header');
            var ThisINFO    = $('#section-sk8 .section-info');
            var ThisBG      = $('#section-sk8 .section-bg');

            var ThisACTION  = $('#section-sk8 .section-action');

            var ThisPERSON  = ThisACTION.find('.action-person');
            var ThisSHADOW  = ThisACTION.find('.action-shadow');


            // var ThisPATH = [{x:0, y:0}, {x:-50, y:-250}, {x:-1000, y:550}];

            // A NICE ARC FROM BOTTOM TO TOP, OVER THE CENTER BLOCK:
            // var ThisPATH = [{x:-50, y:-250}, {x:-300, y:-300}];

            var ThisPATH = {type:"thru", curviness:1, autoRotate:false, values:[{x:0, y:-50}, {x:-100, y:-150}, {x:-300, y:-200}]};





            var ThisTLM = new TimelineMax({ease:Linear.easeNone});

                ThisTLM.set(ThisACTION, {left:'60%'});

                ThisTLM.to(ThisACTION, 1,  {bezier:ThisPATH}, 'a');
                ThisTLM.fromTo(ThisPERSON, 1, {rotation:50}, {rotation:-50}, 'a');
                ThisTLM.fromTo(ThisSHADOW, 1, {rotation:50}, {rotation:-50}, 'a');

                ThisTLM.fromTo(ThisINFO, 1, {top:'-15%'}, {top:'20%'}, 'a');
                // ThisTLM.fromTo(ThisHEADER,  1, {top:'41%'}, {top:'59%'   }, 'a');
                // ThisTLM.fromTo(ThisHEADER,  1, {top:'38%'}, {top:'55%'   }, 'a');

                ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'   }, 'a');



            var ThisDuration = ThisSECTION.outerHeight();



            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisSECTION
                ,triggerHook:0.8
            })
            .offset(140)
            .duration( ThisDuration + 200)
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);


            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Home SK8 Section"});
            }






            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);

            NWG._ResetOBJs.push(ThisINFO);
            NWG._ResetOBJs.push(ThisACTION);
            NWG._ResetOBJs.push(ThisHEADER);


        }


/*

     #####  #    # #    #
     #    # ##  ##  #  #
     #####  # ## #   ##
     #    # #    #   ##
     #    # #    #  #  #
     #####  #    # #    #

*/

        function buildBMX(){
            PT.log('buildBMX()');

            var ThisSECTION = $('#section-bmx');
            var ThisHEADER  = $('#section-bmx .section-header');
            var ThisINFO    = $('#section-bmx .section-info');
            var ThisBG      = $('#section-bmx .section-bg');

            var ThisACTION  = $('#section-bmx .section-action');
            var ThisPERSON  = ThisACTION.find('.action-person');
            var ThisSHADOW  = ThisACTION.find('.action-shadow');




            var ThisTLM = new TimelineMax({ease:Linear.easeNone});

                ThisTLM.fromTo(ThisINFO, 1, {css:{top:'-15%'}}, {css:{top:'20%'}}, 'a');

                // ThisTLM.fromTo(ThisHEADER,  1, {top:'36%'}, {top:'55%'}, 'a');
                ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'}, 'a');


                ThisTLM.fromTo(ThisACTION, 1, {css:{left:'-40%'} },  {css:{left:'100%'} },'a');
                ThisTLM.fromTo(ThisPERSON, 1, {css:{rotation:-10} }, {css:{rotation:50} },'a');
                ThisTLM.fromTo(ThisSHADOW, 1, {css:{rotation:-10} }, {css:{rotation:50} },'a');



            var ThisDuration = ThisSECTION.outerHeight();

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisSECTION
                ,triggerHook:0.8
            })
            .offset(140)
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);


            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Home BMX Section"});
            }


            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);

            NWG._ResetOBJs.push(ThisACTION);
            NWG._ResetOBJs.push(ThisINFO);
            NWG._ResetOBJs.push(ThisHEADER);


        }










    }






























































































 /*
*
*
*
*

       ###    ########  ######## ####  ######  ##       ########
      ## ##   ##     ##    ##     ##  ##    ## ##       ##
     ##   ##  ##     ##    ##     ##  ##       ##       ##
    ##     ## ########     ##     ##  ##       ##       ######
    ######### ##   ##      ##     ##  ##       ##       ##
    ##     ## ##    ##     ##     ##  ##    ## ##       ##
    ##     ## ##     ##    ##    ####  ######  ######## ########

     ######      ###    ##       ##       ######## ########  ##    ##
    ##    ##    ## ##   ##       ##       ##       ##     ##  ##  ##
    ##         ##   ##  ##       ##       ##       ##     ##   ####
    ##   #### ##     ## ##       ##       ######   ########     ##
    ##    ##  ######### ##       ##       ##       ##   ##      ##
    ##    ##  ##     ## ##       ##       ##       ##    ##     ##
     ######   ##     ## ######## ######## ######## ##     ##    ##


*
*
*
**/

    ,buildArticleGALLERY: function() {
        PT.log('buildArticleGALLERY()');


        $('[data-nwg-gallery]').each(function(i, val){
            // PT.log( $(val) );
            buildGallery(val);
        });

        function buildGallery(_val_){

            var ThisGALLERY = $(_val_);

            ThisGALLERY.find('.slider').slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                    dots: false,
                    arrows: false,
                        infinite: true,
                        // autoplay: true,
                        // autoplaySpeed: 2000,
                        // speed: 300,
                        cssEase: 'ease-in-out',
                fade: true,
                asNavFor: '.slider-nav-thumbnails',

             });



             ThisGALLERY.find('.slider-nav-thumbnails').slick({
                slidesToShow: 4
                ,slidesToScroll: 1
                ,infinite: true
                ,asNavFor: '.slider'
                ,cssEase: 'ease-in-out'
                ,focusOnSelect: true


                    ,dots: false
                    ,arrows: false
                    // ,centerMode: true

                    ,mobileFirst: true

                    ,responsive: [
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 6,
                                slidesToScroll: 1
                            }
                        }
                    ]

             });


             //remove active class from all thumbnail slides
            ThisGALLERY.find('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

             //set active class to first thumbnail slides
            ThisGALLERY.find('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

             // On before slide change match active thumbnail to current slide
            ThisGALLERY.find('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var mySlideNumber = nextSlide;
                ThisGALLERY.find('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
                ThisGALLERY.find('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
            });


        }



    }


/*
*
*
*
*
*
   ###    ########  ######## ####  ######  ##       ########
  ## ##   ##     ##    ##     ##  ##    ## ##       ##
 ##   ##  ##     ##    ##     ##  ##       ##       ##
##     ## ########     ##     ##  ##       ##       ######
######### ##   ##      ##     ##  ##       ##       ##
##     ## ##    ##     ##     ##  ##    ## ##       ##
##     ## ##     ##    ##    ####  ######  ######## ########


##     ## ########    ###    ########  ######## ########
##     ## ##         ## ##   ##     ## ##       ##     ##
##     ## ##        ##   ##  ##     ## ##       ##     ##
######### ######   ##     ## ##     ## ######   ########
##     ## ##       ######### ##     ## ##       ##   ##
##     ## ##       ##     ## ##     ## ##       ##    ##
##     ## ######## ##     ## ########  ######## ##     ##

*
*
*
*
**/

    ,buildArticleHeaderAnimations: function() {
        PT.log('buildArticleHeaderAnimations()');


        if(PT._isPreLoaded){
            doNow();
        }else{
            PT.addOnLoad(
               doNow
            );
        }

        function doNow(){

            $('[data-nwg-animate-article-header]').each(function(i, val){
                // PT.log($(val));
                // buildHEADER($(val));
            // });

            // function buildHEADER( _DIV_ ){
                var ThisDIV = $(val);
                var ThisBG = ThisDIV.find('.header-bg');


                var ThisTLM = new TimelineMax({ease:Power2.easeIn});
                    // ThisTLM.fromTo(ThisBG.find('img'), 1, {top:0, opacity:1 }, {top:'30%', opacity:0 }, 'a');
                    ThisTLM.fromTo(ThisBG, 1, {top:0, opacity:1 }, {top:200, opacity:0 }, 'a');

                var ThisDuration = ThisDIV.outerHeight();

                var ThisSCENE = new ScrollMagic.Scene({
                    triggerElement: ThisDIV,
                    triggerHook:0
                })
                .offset( 10 )
                .duration( ThisDuration )
                .setTween(ThisTLM)
                .addTo(PT.SM_CTRL);



                if(PT._isDevMode){
                    ThisSCENE.addIndicators({name: "Article Header"});
                }


                NWG._ResetSMs.push(ThisSCENE);
                NWG._ResetTLMs.push(ThisTLM);
                NWG._ResetOBJs.push(ThisBG);

            });

        }

    }



 /*
*
*
*
*
*
       ###    ########  ######## ####  ######  ##       ########
      ## ##   ##     ##    ##     ##  ##    ## ##       ##
     ##   ##  ##     ##    ##     ##  ##       ##       ##
    ##     ## ########     ##     ##  ##       ##       ######
    ######### ##   ##      ##     ##  ##       ##       ##
    ##     ## ##    ##     ##     ##  ##    ## ##       ##
    ##     ## ##     ##    ##    ####  ######  ######## ########

     ######  ########  ######  ######## ####  #######  ##    ##
    ##    ## ##       ##    ##    ##     ##  ##     ## ###   ##
    ##       ##       ##          ##     ##  ##     ## ####  ##
     ######  ######   ##          ##     ##  ##     ## ## ## ##
          ## ##       ##          ##     ##  ##     ## ##  ####
    ##    ## ##       ##    ##    ##     ##  ##     ## ##   ###
     ######  ########  ######     ##    ####  #######  ##    ##
*
*
*
*
*
**/

    ,buildArticleSectionAnimations: function() {
        PT.log('buildArticleSectionAnimations()');

        if(PT._isPreLoaded){
            doNow();
        }else{
            PT.addOnLoad(
               doNow
            );
        }

        function doNow(){
            $('[data-nwg-animate-article-section]').each(function ( _index_, _element_ ){
                NWG.animateArticleSection( _element_ );
            });
        }
    }


    /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    THIS IS EXTRACTED OUT TO ALLOW FOR ON-THE-FLY BUILD:
    (FOR USE ON INFINITE SCROLL NEW SECTIONS)
     */
    ,animateArticleSection: function( _element_ ) {
// console.log('hello.. im animateArticleSection() ');
        var ThisDIV         = $(_element_);
        var ThisBG          = ThisDIV.find('.article-bg');
        var ThisBLOCK       = ThisDIV.find('.article-infoblock');
        var ThisHEADLINE    = ThisDIV.find('.article-headline');
        var ThisSUMMARY     = ThisDIV.find('.article-summary');

        var ThisTLM = new TimelineMax({ease:Power2.easeOut});
            // ThisTLM.from(ThisDIV,        1, {opacity:0, scale:0.8 }, 'a');
            ThisTLM.from(ThisBG,        1, {opacity:0 }, 'a');
            // ThisTLM.from(ThisBLOCK,     1, {opacity:0 }, 'a+0.5');
            ThisTLM.from(ThisHEADLINE,  1, {opacity:0, left:'-50'}, 'a+=0.5');
            ThisTLM.from(ThisSUMMARY,   1, {opacity:0, left:'-50'}, 'a+=0.6');

        var ThisDuration = ThisDIV.outerHeight() * 0.8;


        var ThisSCENE = new ScrollMagic.Scene({
            triggerElement: ThisDIV,
            triggerHook:0.7
        })
        .offset( 10 )
        // .duration( ThisDuration )
        .reverse(false)
        // .addIndicators({name: "ARTICLE SECTION" })
        .setTween(ThisTLM)
        .on('end', function(e){ ThisSCENE.destroy(); })
        .addTo(PT.SM_CTRL);

        if(PT._isDevMode){
            ThisSCENE.addIndicators({name: "Article Section"});
        }

        // ADD TO THE RESETS LIST:
        NWG._ResetSMs.push( ThisSCENE);
        NWG._ResetTLMs.push( ThisTLM);

        // NWG._ResetOBJs.push( ThisDIV);
        NWG._ResetOBJs.push( ThisBG);
        NWG._ResetOBJs.push( ThisHEADLINE);
        NWG._ResetOBJs.push( ThisSUMMARY);

    }




















































































































/*

    ######## ##     ## ######## ##    ## ########    ########     ###     ######   ########
    ##       ##     ## ##       ###   ##    ##       ##     ##   ## ##   ##    ##  ##
    ##       ##     ## ##       ####  ##    ##       ##     ##  ##   ##  ##        ##
    ######   ##     ## ######   ## ## ##    ##       ########  ##     ## ##   #### ######
    ##        ##   ##  ##       ##  ####    ##       ##        ######### ##    ##  ##
    ##         ## ##   ##       ##   ###    ##       ##        ##     ## ##    ##  ##
    ########    ###    ######## ##    ##    ##       ##        ##     ##  ######   ########

    ##     ## ########    ###    ########  ######## ########   ######
    ##     ## ##         ## ##   ##     ## ##       ##     ## ##    ##
    ##     ## ##        ##   ##  ##     ## ##       ##     ## ##
    ######### ######   ##     ## ##     ## ######   ########   ######
    ##     ## ##       ######### ##     ## ##       ##   ##         ##
    ##     ## ##       ##     ## ##     ## ##       ##    ##  ##    ##
    ##     ## ######## ##     ## ########  ######## ##     ##  ######

*/


// <div data-pageheader-events="fmx">
// <div data-pageheader-events="bmx">
// <div data-pageheader-events="sk8">


    ,build_PageHeader_Events_Animations: function() {
        // console.log('build_PageHeader_Events_Animations()');


        $('[data-nwg-animate-pageheader-events]').each(function(i, val){
            header_BG_Away(val);
        });


        function header_BG_Away(_DIV_){
            // console.log('build_PageHeader_Events(){ ---> header_BG_Away() ');

            var ThisDIV = $(_DIV_);
            var ThisBG = ThisDIV.find('.header-bg');

            var ThisTLM = new TimelineMax({ease:Linear.easeNone});
                ThisTLM.to(ThisBG,   1,  { opacity:0, backgroundPositionY: "250px"}, 'a');
                // ThisTLM.to(ThisBG,   1,  { backgroundPositionY: "250px"}, 'a');

            var ThisDuration = ThisDIV.outerHeight();
            // var ThisDuration = 600;

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:0
            })
            // .offset( 50 )
            .duration( ThisDuration )
            .setTween( ThisTLM )
            .addTo( PT.SM_CTRL );




            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisBG);


        }


    }















/*

######## ##     ## ######## ##    ## ########    ########     ###     ######   ########
##       ##     ## ##       ###   ##    ##       ##     ##   ## ##   ##    ##  ##
##       ##     ## ##       ####  ##    ##       ##     ##  ##   ##  ##        ##
######   ##     ## ######   ## ## ##    ##       ########  ##     ## ##   #### ######
##        ##   ##  ##       ##  ####    ##       ##        ######### ##    ##  ##
##         ## ##   ##       ##   ###    ##       ##        ##     ## ##    ##  ##
########    ###    ######## ##    ##    ##       ##        ##     ##  ######   ########

   ###     ######  ######## ####  #######  ##    ##  ######
  ## ##   ##    ##    ##     ##  ##     ## ###   ## ##    ##
 ##   ##  ##          ##     ##  ##     ## ####  ## ##
##     ## ##          ##     ##  ##     ## ## ## ##  ######
######### ##          ##     ##  ##     ## ##  ####       ##
##     ## ##    ##    ##     ##  ##     ## ##   ### ##    ##
##     ##  ######     ##    ####  #######  ##    ##  ######


 */



    ,build_Animate_Actions: function() {
        PT.log('build_Animate_Actions()');


        $('[data-animate-action]').each(function(i, val){

            var ThisEventName = $(this).data('animate-action');

            PT.log('ThisEventName = ' + ThisEventName);


            var ThisDIV = $(val);
            var ThisACTION = ThisDIV.find('.event-action');


            var ThisTLM = new TimelineMax({ ease:Linear.easeNone});


            // may need to calculate the width and height of the window:
            // var ThisPATH = {type:"thru", curviness:1, autoRotate:true, values:[{x:0, y:0}, {x:600, y:200}, {x:1200, y:900}]};
            // var ThisPATH = {type:"thru", curviness:1, autoRotate:true, values:[ {x:600, y:450}, {x:1200, y:900}]};


            switch(ThisEventName) {

                case "fmx":
                        // TweenMax.set(ThisACTION, {x:'-100%', y:'-100%'});
                        // ThisTLM.to(ThisACTION, 1,  {bezier:ThisPATH}, 'a');

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'-30%', top:'70%', rotation:-10, opacity:1},
                                                                { left:'130%', top:'30%', rotation:20, ease:Linear.easeNone}, 'a');
                    break;

                case "fmx-best-trick":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'130%', top:'80%', rotation:-50, opacity:1},
                                                                { left:'-30%', top:'20%', rotation:100, ease:Linear.easeNone}, 'a');
                    break;

                case "bmx-best-tricks":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'130%', top:'80%', rotation:60, opacity:1},
                                                                { left:'-30%', top:'10%', rotation:-30, ease:Linear.easeNone}, 'a');
                    break;

                case "bmx-triganta":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'-30%', top:'80%', rotation:0, opacity:1},
                                                                { left:'130%', top:'20%', rotation:40, ease:Linear.easeNone}, 'a');
                    break;

                case "scooter":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'-30%', top:'90%', rotation:0, opacity:1},
                                                                { left:'130%', top:'20%', rotation:180, ease:Linear.easeNone}, 'a');
                    break;

                case "inline":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'130%', top:'80%', rotation:70, opacity:1},
                                                                { left:'-30%', top:'20%', rotation:-50, ease:Linear.easeNone}, 'a');
                    break;

                case "skate":

                        ThisTLM.fromTo(ThisACTION,    1,        { left:'-30%', top:'80%', rotation:0, opacity:1},
                                                                { left:'130%', top:'20%', rotation:45, ease:Linear.easeNone}, 'a');
                    break;

                default:
                    break;

            }





            var ThisDuration = 800;

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:0.6
            })
            // .offset( 50 )
            .duration( ThisDuration )
            .setTween( ThisTLM )
            .addTo( PT.SM_CTRL );

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Event Action"});
            }


            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisACTION);


        });



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
        PT.log('build_Events_Mini_Slider()');



        $('.section-events-mini-slider').each(function(i, val){


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

































































 /*
*
*
*
*

     ######   ######## ##    ## ######## ########  ####  ######
    ##    ##  ##       ###   ## ##       ##     ##  ##  ##    ##
    ##        ##       ####  ## ##       ##     ##  ##  ##
    ##   #### ######   ## ## ## ######   ########   ##  ##
    ##    ##  ##       ##  #### ##       ##   ##    ##  ##
    ##    ##  ##       ##   ### ##       ##    ##   ##  ##    ##
     ######   ######## ##    ## ######## ##     ## ####  ######

    ##     ## ########    ###    ########  ######## ########
    ##     ## ##         ## ##   ##     ## ##       ##     ##
    ##     ## ##        ##   ##  ##     ## ##       ##     ##
    ######### ######   ##     ## ##     ## ######   ########
    ##     ## ##       ######### ##     ## ##       ##   ##
    ##     ## ##       ##     ## ##     ## ##       ##    ##
    ##     ## ######## ##     ## ########  ######## ##     ##

       ###    ##    ## #### ##     ##    ###    ######## ####  #######  ##    ##
      ## ##   ###   ##  ##  ###   ###   ## ##      ##     ##  ##     ## ###   ##
     ##   ##  ####  ##  ##  #### ####  ##   ##     ##     ##  ##     ## ####  ##
    ##     ## ## ## ##  ##  ## ### ## ##     ##    ##     ##  ##     ## ## ## ##
    ######### ##  ####  ##  ##     ## #########    ##     ##  ##     ## ##  ####
    ##     ## ##   ###  ##  ##     ## ##     ##    ##     ##  ##     ## ##   ###
    ##     ## ##    ## #### ##     ## ##     ##    ##    ####  #######  ##    ##

*
*
*
*
**/   // THIS IS FOR HEADERS THAT ARE NOT THE HOME PAGE, NOR AN ARTICLE:

    ,buildHeaderAnimations: function() {
        PT.log('buildHeaderAnimations()');

        $('[data-nwg-animate-header]').each(function(i, val){

            var ThisDIV = $(val);
            var ThisBG = ThisDIV.find('.header-bg');

            var ThisTLM = new TimelineMax({ease:Power2.easeIn});

                ThisTLM.fromTo(ThisBG, 1, {opacity:1, top:0 }, {opacity:0, top:300 }, 'a');

            var ThisDuration = ThisDIV.outerHeight();

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:0
            })
            .offset( 10 )
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Internal Header"});
            }

            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisBG);

        });

    }































/*
*
*
*
*

     ######  ########  ##          ###    ########
    ##    ## ##     ## ##         ## ##      ##
    ##       ##     ## ##        ##   ##     ##
     ######  ########  ##       ##     ##    ##
          ## ##        ##       #########    ##
    ##    ## ##        ##       ##     ##    ##
     ######  ##        ######## ##     ##    ##

     ######  ########  ######  ######## ####  #######  ##    ##
    ##    ## ##       ##    ##    ##     ##  ##     ## ###   ##
    ##       ##       ##          ##     ##  ##     ## ####  ##
     ######  ######   ##          ##     ##  ##     ## ## ## ##
          ## ##       ##          ##     ##  ##     ## ##  ####
    ##    ## ##       ##    ##    ##     ##  ##     ## ##   ###
     ######  ########  ######     ##    ####  #######  ##    ##

*
*
*
*
**/
    ,build_Splat_Section_Animations: function() {
        PT.log('build_Splat_Section_Animations()');
        NWG.buildSectionAnimations();
    }

    ,buildSectionAnimations: function() {

        $('[data-nwg-animate-splatsection]').each(function(i, val){

            var ThisDIV = $(val);
            var ThisBLOCK = ThisDIV.find('.info-block');

            var ThisTLM = new TimelineMax({ease:Linear.easeNone});
                ThisTLM.fromTo(ThisBLOCK, 1, {top:'30%'}, {top:'60%', ease:Power1.easeInOut}, 'a');

            var ThisDuration = ThisDIV.outerHeight();

            var ThisSCENE = new ScrollMagic.Scene({
                triggerElement: ThisDIV,
                triggerHook:0.5
            })
            // .offset( 100 )
            .duration( ThisDuration )
            .setTween(ThisTLM)
            .addTo(PT.SM_CTRL);

            if(PT._isDevMode){
                ThisSCENE.addIndicators({name: "Splat Section"});
            }

            NWG._ResetSMs.push(ThisSCENE);
            NWG._ResetTLMs.push(ThisTLM);
            NWG._ResetOBJs.push(ThisBLOCK);

        });

    }






















































































/*


    ##     ## ####  ######   ######
    ###   ###  ##  ##    ## ##    ##
    #### ####  ##  ##       ##
    ## ### ##  ##   ######  ##
    ##     ##  ##        ## ##
    ##     ##  ##  ##    ## ##    ##
    ##     ## ####  ######   ######

*/









/*
    <a href="#section-video" data-scroll-to="#section-video">
*/
    ,build_data_scroll_to: function() {
        PT.log('build_data_scroll_to()');


        $('[ data-scroll-to]').each(function(i, val){

            var thisLinkID = $(this).data('scroll-to');
            // var thisHash = $(this.hash)
            var thisOffset = $(thisLinkID).offset().top;

            $(val).on('click', function(e) {
                e.preventDefault();

                // console.log('thisLinkID ' + thisLinkID);
                // console.log('thisOffset ' + thisOffset);

                TweenMax.to(window, 0.5, { scrollTo:{ y:thisOffset }, ease:Power3.easeInOut } );

            });

        });
    }





























/*

    <div class="simple-cycle">
        <div data-pt-imgswap ><img src="assets/img/track1.png" alt=""></div>
        <div data-pt-imgswap ><img src="assets/img/track2.png" alt=""></div>
        <div data-pt-imgswap ><img src="assets/img/track3.png" alt=""></div>
        <div data-pt-imgswap ><img src="assets/img/track4.png" alt=""></div>
        <div data-pt-imgswap ><img src="assets/img/track5.png" alt=""></div>
    </div>
    // THIS IS A SIMPLE SLIDESHOW OF FADING IMAGES
    // NWG.simpleCycle('.simple-cycle');
*/


    ,simpleCycle: function(_div_) {

        var $slides = $(_div_).find('>div');             // slides
        var currentSlide = 0;                            // keep track on the current slide
        var stayTime = 4;                                // time the slide stays
        // var slideTime = 1;                            // fade in / fade out time

        //we hide all images after the first one
        TweenLite.set($slides.filter(":gt(0)"), {autoAlpha:0});

        //start the slideshow
        TweenLite.delayedCall(stayTime, nextSlide);

        function nextSlide(){

            //fade out the old slide
            TweenLite.to( $slides.eq(currentSlide), 1, {autoAlpha:0} );

            //find out the next slide
            currentSlide = ++currentSlide % $slides.length;

            //fade in the next slide
            TweenLite.fromTo( $slides.eq(currentSlide), 2, {autoAlpha:0}, {autoAlpha:1} );
            TweenLite.fromTo( $slides.eq(currentSlide), 5, {scale:1}, {scale:1.5, ease:Power1.easeInOut} );

            //wait a couple of seconds before next slide
            TweenLite.delayedCall(stayTime, nextSlide);
        }

    }




































/*

    ######## ########     ###    ##    ##  ######  #### ######## ####  #######  ##    ##  ######
       ##    ##     ##   ## ##   ###   ## ##    ##  ##     ##     ##  ##     ## ###   ## ##    ##
       ##    ##     ##  ##   ##  ####  ## ##        ##     ##     ##  ##     ## ####  ## ##
       ##    ########  ##     ## ## ## ##  ######   ##     ##     ##  ##     ## ## ## ##  ######
       ##    ##   ##   ######### ##  ####       ##  ##     ##     ##  ##     ## ##  ####       ##
       ##    ##    ##  ##     ## ##   ### ##    ##  ##     ##     ##  ##     ## ##   ### ##    ##
       ##    ##     ## ##     ## ##    ##  ######  ####    ##    ####  #######  ##    ##  ######


       ###    ##    ## #### ##     ##    ###    ######## ####  #######  ##    ##  ######
      ## ##   ###   ##  ##  ###   ###   ## ##      ##     ##  ##     ## ###   ## ##    ##
     ##   ##  ####  ##  ##  #### ####  ##   ##     ##     ##  ##     ## ####  ## ##
    ##     ## ## ## ##  ##  ## ### ## ##     ##    ##     ##  ##     ## ## ## ##  ######
    ######### ##  ####  ##  ##     ## #########    ##     ##  ##     ## ##  ####       ##
    ##     ## ##   ###  ##  ##     ## ##     ##    ##     ##  ##     ## ##   ### ##    ##
    ##     ## ##    ## #### ##     ## ##     ##    ##    ####  #######  ##    ##  ######

*/

// USE:
// <div data-nwg-animation="slide-from-left">
// <div data-nwg-animation="slide-from-right">
// <div data-nwg-animation="slide-from-top">
// <div data-nwg-animation="slide-from-bottom">
// <div data-nwg-animation="fade-in">
// <div data-nwg-animation="zoom-in">

// <div data-nwg-animation="___">

    ,build_Animations: function(_DURATION) {
    // ,buildTransitions: function(_DURATION) {
        PT.log('NWG.build_Animations()');



        if(PT._isPreLoaded){
            doNow();
        }else{
            PT.addOnLoad(
               doNow
            );
        }



        // WE MUST WAIT UNTIL THE CONTENT IS DONE LOADING BEFORE
        // CALCULATING THE HEIGHTS OF THE SCROLL SPY SECTIONS:
        function doNow(){


            var _D_ = typeof _DURATION !== 'undefined' ? _DURATION : true;

            // _D_ = false;//FORCE FOR TESTING PURPOSES

            // var H = $(window).height();
            var ThisH = $(window).height();


            var SLIDE_FromRight = [];
            var SLIDE_FromLeft = [];
            var SLIDE_FromBottom = [];
            var SLIDE_FromTop = [];
            var FADE_In = [];
            var ZOOM_In = [];



            // CHECK THE PAGE FOR ELEMENTS AND LOAD THEM IN THE ARRAYS FOR BUILD:


            $('[data-nwg-animation]').each(function(i, val){
                var transitionType = $(this).data('nwg-animation');
                // //console.log( transitionType );

                switch(transitionType) {

                    case "slide-from-right":
                        SLIDE_FromRight.push(this);
                        break;

                    case "slide-from-left":
                        SLIDE_FromLeft.push(this);
                        break;

                    case "slide-from-top":
                        SLIDE_FromTop.push(this);
                        break;

                    case "slide-from-bottom":
                        SLIDE_FromBottom.push(this);
                        break;

                    case "fade-in":
                        FADE_In.push(this);
                        break;

                    case "zoom-in":
                        ZOOM_In.push(this);
                        break;

                    default:
                        // default
                        break;

                }

            });







            //  .slide-fromLeft
            for (var i2=0; i2 < SLIDE_FromLeft.length; i2++){

                $(SLIDE_FromLeft[i2]).parent().css({'overflow-x':'hidden'});

                // var tweenFromLeft = new TweenMax.from(SLIDE_FromLeft[i2], 1, {alpha:0, x:'-=50', ease:Power1.easeOut} );

                var tweenFromLeft = new TimelineMax();

                    tweenFromLeft.fromTo(SLIDE_FromLeft[i2], 1, {alpha:0, x:'-=50', ease:Power1.easeOut}, {alpha:1, x:'0', clearProps:'all'} );


                var scene_fromLeft = new ScrollMagic.Scene({
                // var SM_Scene = new ScrollMagic.Scene({
                    triggerElement: SLIDE_FromLeft[i2]
                    ,triggerHook:0.8
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(false)
                // .addIndicators()
                .setTween(tweenFromLeft);

                if(_D_){
                    scene_fromLeft.reverse(true);
                    scene_fromLeft.duration(ThisH/2);
                }else{
                    // MAYBE THIS SHOULD BE DESTROYED AFTER IT RUNS
                    // scene_fromLeft.on('end', function(e){scene_fromLeft.destroy()} );
                }


                NWG._ResetOBJs.push(SLIDE_FromLeft[i2]);
                NWG._ResetTLMs.push(tweenFromLeft);
                NWG._ResetSMs.push(scene_fromLeft);

            }




            //  .slide-fromRight
            for (var i1=0; i1 < SLIDE_FromRight.length; i1++){

                $(SLIDE_FromRight[i1]).parent().css({'overflow-x':'hidden'});

                // var tweenFromRight = new TweenMax.from(SLIDE_FromRight[i1], 1, {alpha:0, x:'+=50', ease:Power1.easeOut} );
                var tweenFromRight = new TimelineMax();

                    tweenFromRight.fromTo(SLIDE_FromRight[i1], 1, {alpha:0, x:'+=50', ease:Power1.easeOut}, {alpha:1, x:'0', clearProps:'all'} );




                var scene_fromRight = new ScrollMagic.Scene({
                // var SM_Scene = new ScrollMagic.Scene({
                    triggerElement: SLIDE_FromRight[i1]
                    ,triggerHook:0.8
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(false)
                // .addIndicators()
                .setTween(tweenFromRight);

                if(_D_){
                    scene_fromRight.reverse(true);
                    scene_fromRight.duration(ThisH/2);
                }


                NWG._ResetOBJs.push(SLIDE_FromRight[i1]);
                NWG._ResetTLMs.push(tweenFromRight);
                NWG._ResetSMs.push(scene_fromRight);


            }



            //  .slide-fromBottom
            for (var i3=0; i3 < SLIDE_FromBottom.length; i3++){

                $(SLIDE_FromBottom[i3]).parent().css({'overflow-y':'hidden'});

                // var tweenFromBottom = new TweenMax.from(SLIDE_FromBottom[i3], 1, {alpha:0, y:'+=50', ease:Power1.easeOut} );

                var tweenFromBottom = new TimelineMax();

                    tweenFromBottom.fromTo(SLIDE_FromBottom[i3], 1, {alpha:0, y:'+=50', ease:Power1.easeOut}, {alpha:1, y:'0', clearProps:'all'} );





                var scene_fromBottom = new ScrollMagic.Scene({
                    triggerElement: SLIDE_FromBottom[i3]
                    ,triggerHook:0.8
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(false)
                // .addIndicators()
                .setTween(tweenFromBottom);

                if(_D_){
                    scene_fromBottom.reverse(true);
                    scene_fromBottom.duration(ThisH/2);
                }


                NWG._ResetOBJs.push(SLIDE_FromBottom[i3]);
                NWG._ResetTLMs.push(tweenFromBottom);
                NWG._ResetSMs.push(scene_fromBottom);



            }




            //  .slide-fromTop
            for (var i4=0; i4 < SLIDE_FromTop.length; i4++){

                $(SLIDE_FromTop[i4]).parent().css({'overflow-y':'hidden'});

                // var tweenFromTop = new TweenMax.from(SLIDE_FromTop[i4], 1, {alpha:0, y:'-=50', ease:Power1.easeOut} );



                var tweenFromTop = new TimelineMax();
                    tweenFromTop.fromTo(SLIDE_FromTop[i4], 1, {alpha:0, y:'-=50', ease:Power1.easeOut}, {alpha:1, y:'0', clearProps:'all'} );




                var scene_fromTop = new ScrollMagic.Scene({
                    triggerElement: SLIDE_FromTop[i4]
                    ,triggerHook:0.8
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(false)
                // .addIndicators()
                .setTween(tweenFromTop);

                if(_D_){
                    scene_fromTop.reverse(true);
                    scene_fromTop.duration(ThisH/2);
                }


                NWG._ResetOBJs.push(SLIDE_FromTop[i4]);
                NWG._ResetTLMs.push(tweenFromTop);
                NWG._ResetSMs.push(scene_fromTop);



            }





            //  .fade-in
            for (var i5=0; i5 < FADE_In.length; i5++){

                var tweenFadeIn = new TweenMax.from(FADE_In[i5], 1, {alpha:0, ease:Power1.easeIn} );
                // var tweenFadeIn = new TweenMax.from(FADE_In[i5], 1, {alpha:0, ease.Linear.easeNone} );

                var scene_f = new ScrollMagic.Scene({
                    triggerElement: FADE_In[i5]
                    ,triggerHook:0.8
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(true)
                // .addIndicators()
                .setTween(tweenFadeIn);

                if(_D_){
                    scene_f.reverse(true);
                    scene_f.duration(ThisH/2);
                }


                NWG._ResetOBJs.push(FADE_In[i5]);
                NWG._ResetTLMs.push(tweenFadeIn);
                NWG._ResetSMs.push(scene_f);



            }



            //  .zoom-in
            for (var i6=0; i6 < ZOOM_In.length; i6++){
                // console.log('ZOOM IN');

                var tweenZoomIn = new TweenMax.from(ZOOM_In[i6], 1, {alpha:0, scale:0.9, ease:Power1.easeInOut} );
                // var tweenFadeIn = new TweenMax.from(FADE_In[i6], 1, {alpha:0, ease.Linear.easeNone} );

                var scene_z = new ScrollMagic.Scene({
                    triggerElement: ZOOM_In[i6]
                    ,triggerHook:0.7
                })
                // .addTo(SM_CTRL_Extras)
                .addTo(PT.SM_CTRL)
                .reverse(true)
                // .addIndicators()
                .setTween(tweenZoomIn);

                if(_D_){
                    scene_z.reverse(true);
                    scene_z.duration(ThisH/2);
                }


                NWG._ResetOBJs.push(ZOOM_In[i6]);
                NWG._ResetTLMs.push(tweenZoomIn);
                NWG._ResetSMs.push(scene_z);



            }




        }

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
