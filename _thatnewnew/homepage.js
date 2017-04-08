



/*

    #### ##    ## ######## ########   #######
     ##  ###   ##    ##    ##     ## ##     ##
     ##  ####  ##    ##    ##     ## ##     ##
     ##  ## ## ##    ##    ########  ##     ##
     ##  ##  ####    ##    ##   ##   ##     ##
     ##  ##   ###    ##    ##    ##  ##     ##
    #### ##    ##    ##    ##     ##  #######

*/


    // NWG.build_Site_Homeplate_Intro = function() {
    NWG.build_Homepage = function() {

        PT.log('NWG.build_Homepage()', 'blue');



        var ThisHP    = $('#homeplate');

        var hasIntroCookie = false;

        var ThisCOVER = $('.preloader-cover');




        // SIMPLE LITTLE COOKIE FRAMEWORK FROM MOZILLA:
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework
        //
        // if( docCookies.getItem('intro') ) {
        //     // console.log('~~~~~~~ yes cookie ~~~~~~~~');
        //     // hasIntroCookie = true;
        // } else {
        //     // console.log('~~~~~~~ no cookie ~~~~~~~~')
        //     // hasIntroCookie = false;
        // }




        // 20 SECONDS:
        // docCookies.setItem('intro', 'hello intro', 20);
        // ONE DAY:
        // docCookies.setItem('intro', 'hello intro', 864e2, '/');


        //
        //
        // if(ThisHP.length){
        //     if( (ThisHP.data('nwg-hpintro') === true) && ( !hasIntroCookie ) ){
        //         // console.log('ok, lettuce make an introduction.');
        //         okDO();
        //     }else{
        //         // console.log('Im sorry, there will be no introductions at this time.');
        //         if( ThisCOVER.length ) {
        //             TweenMax.to(ThisCOVER, 1, {opacity:0, onComplete:okDONT});
        //         }
        //     }
        // }
        //
        //
        //
        // function okDONT(){
        //     ThisCOVER.remove();
        // }

PT.log(ThisHP.data('nwg-hpintro'), 'red');

if( ThisHP.data('nwg-hpintro') === true ){
    // if(true){
        okDO();
    }else{
        ThisCOVER.remove();
    }


        function okDO() {
            console.log('okDO build intro ');

            // NONE OF THIS IS WORKING ?:
            // document.body.scrollTop = 0;
            // $(document).scrollTop(0);
            // $(window).scrollTop(0);
            // $('html').scrollTop(0);
            // $('body').scrollTop(0);
            // TweenMax.set(window, {scrollTo:{y:0}});

            // $('body').addClass('noscroll');


            var ThisLOGO            = ThisHP.find('.homeplate-logoholder');
            var ThisLOGO_TEXT       = ThisLOGO.find('.logo-text');
            var ThisLOGO_GLOBE      = ThisLOGO.find('.logo-globe');

            var ThisINFO      = ThisHP.find('.homeplate-info');

            var ThisBG      =   ThisHP.find('.homeplate-bg');

            // var ThisABOUT   =   $("#section-about");

            var ThisTOPBAR  =   $('#site-topbar');
ThisTOPBAR.css({ 'top' : -ThisTOPBAR.outerHeight()});

            var ThisBtn_TICKETS     =   ThisHP.find('.btn-tickets');
            var ThisBtn_VIDEO       =   ThisHP.find('.btn-video');


            var hp_h = ThisHP.innerHeight();




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




            // var loopThisMany = 1;
            var i = 0;

            var ThisTLM_LOOP = new TimelineMax({
                paused:true
                ,ease:Linear.easeNone
                // ,repeat:-1
                // ,yoyo:true
                ,onComplete:function(){
                    console.log("LOOP COMPLETE FUNC() " + PT._isPreloaded);
                    i++;
                    // if((PT._isPreloaded) && (loopThisMany < i)){
                    if((PT._isPreloaded)){
                        console.log(" DONE ");
                        ThisTLM_LOOP.kill();
                        ThisTLM_OUTRO.play();
                        $('body').removeClass('noscroll');
                    }else{
                        ThisTLM_LOOP.restart();
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
// ThisTLM_INTRO.set(ThisHP, {height:$(window).innerHeight() });

            // ThisTLM_INTRO.set([ThisBG, ThisABOUT], {autoAlpha:0 });
            ThisTLM_INTRO.set(ThisINFO, {autoAlpha:0 });
            ThisTLM_LOOP.set(ThisLOGO_GLOBE,   {alpha:0, left:"50%" });
            ThisTLM_LOOP.set(ThisLOGO_TEXT,   {alpha:0,  left:"50%" });

            ThisTLM_INTRO.to(ThisCOVER, 1, {delay:0, autoAlpha:0});


    // LOOP :
            ThisTLM_LOOP.fromTo(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0}, {scale:1.1, alpha:1, ease:Power1.easeOut}, 'a');
            ThisTLM_LOOP.fromTo(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0}, {scale:1.3, alpha:1, ease:Power1.easeOut}, 'a');
            // ThisTLM_LOOP.to(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0, ease:Power1.easeIn}, 'aaa');
            // ThisTLM_LOOP.to(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0, ease:Power1.easeIn}, 'aaa');


    // OUTRO :
            // ThisTLM_OUTRO.fromTo(ThisLOGO_GLOBE, 1,   {scale:1, alpha:0}, {scale:1.1, alpha:1, ease:Power1.easeOut}, 'aa');
            // ThisTLM_OUTRO.fromTo(ThisLOGO_TEXT,  0.8, {scale:1, alpha:0}, {scale:1.3, alpha:1, ease:Power1.easeOut}, 'aa');

            ThisTLM_OUTRO.to(ThisLOGO_GLOBE, 1.5,     {scale:1, alpha:1, left:"0", ease:Power1.easeInOut}, 'c');
            ThisTLM_OUTRO.to(ThisLOGO_TEXT,  1.5,     {scale:1, alpha:1, left:"0", ease:Power1.easeInOut}, 'c');

            // ThisTLM_OUTRO.to(ThisHP, 1, {height:hp_h, clearProps:'all'}, 'c' );
// ThisTLM_OUTRO.to(ThisHP,            2,  {height:"80vh", ease:Power1.easeInOut}, 'c' );
            ThisTLM_OUTRO.to(ThisBG,            2,  {autoAlpha:1, ease:Power1.easeInOut}, 'c');
            ThisTLM_OUTRO.to(ThisTOPBAR,        1,  {top:0, ease:Power1.easeInOut}, 'c' );


            ThisTLM_OUTRO.fromTo(ThisINFO,      1,  {alpha:0, left:'-100px', top:"10px"},
                                                    {autoAlpha:1, left:"0", top:"0", ease:Power1.easeInOut}, 'c+=0.5');


            ThisTLM_OUTRO.fromTo(ThisBtn_TICKETS,   0.5,  {opacity:0}, {  opacity:1 }, 'c+=0.2');
            ThisTLM_OUTRO.fromTo(ThisBtn_VIDEO,     0.7,  {opacity:0}, {  opacity:1 }, 'c+=0.2');








        }//okDO();



    };











































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









































//
//
//     NWG.buildHomeSectionAnimations = function() {
//         NWG.log('buildHomeSectionAnimations()');
// //
//
//         if( $('body.page-home').length ){
//
//             // buildHEADER();
//             //
//             // buildABOUT();
//             //
//             // buildFMX();
//             //
//             // buildSK8();
//             //
//             // buildBMX();
//
//         }
//
//
//
//
// /*
//
//     #    # ######   ##   #####  ###### #####       ##   #    #   ##   #   #
//     #    # #       #  #  #    # #      #    #     #  #  #    #  #  #   # #
//     ###### #####  #    # #    # #####  #    #    #    # #    # #    #   #
//     #    # #      ###### #    # #      #####     ###### # ## # ######   #
//     #    # #      #    # #    # #      #   #     #    # ##  ## #    #   #
//     #    # ###### #    # #####  ###### #    #    #    # #    # #    #   #
//
//  */
//
//
//         function buildHEADER(){
//             PT.log('buildHEADER()');
//
//             var ThisHP              =   $('#homeplate');
//
//             var ThisBG              =   ThisHP.find('.homeplate-bg');
//
//             var ThisLOGO            =   ThisHP.find('.homeplate-logoholder');
//
//             var ThisBtn_TICKETS     =   ThisHP.find('.btn-tickets');
//             var ThisBtn_VIDEO       =   ThisHP.find('.btn-video');
//
//
//
//
//
//             var ThisTLM = new TimelineMax({ease:Linear.easeNone});
//
//                 // ThisTLM.to(ThisBtn_TICKETS,     0.3,    {top:'+=10px',   left:'-=200px',  opacity:0 }, 'a' );
//                 // ThisTLM.to(ThisBtn_VIDEO,       0.3,    {top:'-=5px',    left:'+=100px',   opacity:0 }, 'a' );
//
//                 // ThisTLM.fromTo(ThisBtn_TICKETS,     1,    {left:'0', opacity:1}, {   left:'-=200px',     opacity:0, ease:Power3.easeOut }, 'a' );
//                 // ThisTLM.fromTo(ThisBtn_VIDEO,       1,    {left:'0', opacity:1}, {   left:'+=100px',     opacity:0, ease:Power3.easeOut }, 'a' );
//
//                 // ThisTLM.to(ThisLOGO,            1,      {top:'+=300'}, 'a');
//
//                 ThisTLM.fromTo(ThisBG,          1,      {css:{top:'-15%'}}, {css:{top:'20%', opacity:0}}, 'a');
//
//
//             var ThisDuration = ThisBG.outerHeight();
//
//             var ThisSCENE = new ScrollMagic.Scene({
//                 triggerElement: $('#homeplate')
//                 ,triggerHook:0
//             })
//             .offset( 10 )
//             .duration( ThisDuration )
//             .setTween(ThisTLM)
//             .addTo(PT.SM_CTRL);
//
//             if(PT._isDevMode){
//                 ThisSCENE.addIndicators({name: "Home Header BG"});
//             }
//
//
//             ThisSCENE.on("enter", function (event) {
//                 // console.log("Scene entered.");
//                 // console.log(NWG._isPlayingHPVideo);
//
//                 if(NWG._isPlayingHPVideo){
//                     // ThisSCENE.enabled(false);
//                     ThisTLM.paused(true);
//                 }else{
//                     // ThisSCENE.enabled(true);
//                     ThisTLM.paused(false);
//                 }
//
//             });
//
//
//             NWG._ResetSMs.push(ThisSCENE);
//             NWG._ResetTLMs.push(ThisTLM);
//             NWG._ResetOBJs.push(ThisBG);
//
//
//         }
//
//
//
//
//
//
//
//
//
//
// /*
//
//        ##   #####   ####  #    # #####
//       #  #  #    # #    # #    #   #
//      #    # #####  #    # #    #   #
//      ###### #    # #    # #    #   #
//      #    # #    # #    # #    #   #
//      #    # #####   ####   ####    #
//
//  */
//
//
//         function buildABOUT(){
//             PT.log('buildABOUT()');
//
//             var ThisTHING = $('#section-about .about-block');
//
//             var ThisTRIGGER = $('#section-about');
//
//             var ThisDURATION = ThisTRIGGER.outerHeight();
//
//             var ThisTLM = new TimelineMax({ease:Power4.easeInOut});
//
//                 ThisTLM.to(ThisTHING, 1, { css:{top:'-20%'} }, 'a');
//
//
//             var ThisSCENE = new ScrollMagic.Scene({
//                 triggerElement: ThisTRIGGER
//                 ,triggerHook:0.85
//             })
//             // .offset( 10 )
//             // .duration( ThisDURATION )
//             .duration( 400 )
//             // .addIndicators({name: "ABOUT BLOCK"})
//             .setTween(ThisTLM)
//             .addTo(PT.SM_CTRL);
//
//             if(PT._isDevMode){
//                 ThisSCENE.addIndicators({name: "Home About Section"});
//             }
//
//             NWG._ResetSMs.push(ThisSCENE);
//             NWG._ResetTLMs.push(ThisTLM);
//             NWG._ResetOBJs.push(ThisTHING);
//
//         }
//
//
//
//
//
//
// /*
//
//      ###### #    # #    #
//      #      ##  ##  #  #
//      #####  # ## #   ##
//      #      #    #   ##
//      #      #    #  #  #
//      #      #    # #    #
//
//  */
//
//         function buildFMX(){
//             PT.log('buildFMX()');
//             // var ThisPATH = [{x:0, y:0}, {x:250, y:250}, {x:500, y:1500}];
//
//             var ThisSECTION = $('#section-fmx');
//             var ThisHEADER  = $('#section-fmx .section-header');
//             var ThisINFO    = $('#section-fmx .section-info');
//             var ThisACTION  = $('#section-fmx .section-action');
//             var ThisBG      = $('#section-fmx .section-bg');
//
//             var ThisPERSON  = ThisACTION.find('.action-person');
//             var ThisSHADOW  = ThisACTION.find('.action-shadow');
//
//
//
//
//             var ThisTLM = new TimelineMax({ease:Linear.easeNone});
//
//                 ThisTLM.fromTo(ThisINFO,    1, {css:{top:'-15%'}}, {css:{top:'20%'  }}, 'a');
//                 ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'   }, 'a');
//
//
//                 ThisTLM.fromTo(ThisACTION,  1, {css:{left:'130%'} }, {css:{left:'-30%'} },'a');
//
//                 ThisTLM.fromTo(ThisPERSON,  1, {rotation:-100 }, {rotation:100 },'a');
//                 ThisTLM.fromTo(ThisSHADOW,  1, {rotation:-100 }, {rotation:100 },'a');
//
//
//
//             var ThisDuration = ThisSECTION.outerHeight();
//
//
//             var ThisSCENE = new ScrollMagic.Scene({
//                 triggerElement: ThisSECTION
//                 ,triggerHook:0.8
//             })
//             .offset(140)
//             .duration( ThisDuration )
//             .setTween(ThisTLM)
//             .addTo(PT.SM_CTRL);
//
//
//             if(PT._isDevMode){
//                 ThisSCENE.addIndicators({name: "Home FMX Section"});
//             }
//
//
//
//
//
//             NWG._ResetSMs.push(ThisSCENE);
//             NWG._ResetTLMs.push(ThisTLM);
//
//             NWG._ResetOBJs.push(ThisINFO);
//             NWG._ResetOBJs.push(ThisACTION);
//             NWG._ResetOBJs.push(ThisPERSON);
//             NWG._ResetOBJs.push(ThisSHADOW);
//             NWG._ResetOBJs.push(ThisHEADER);
//
//
//         }
//
//
//
//
//
//
// /*
//
//                     #####
//       ####  #    # #     #
//      #      #   #  #     #
//       ####  ####    #####
//           # #  #   #     #
//      #    # #   #  #     #
//       ####  #    #  #####
//
//
// */
//
//         function buildSK8(){
//             PT.log('buildSK8()');
//
//             var ThisSECTION = $('#section-sk8');
//             var ThisHEADER  = $('#section-sk8 .section-header');
//             var ThisINFO    = $('#section-sk8 .section-info');
//             var ThisBG      = $('#section-sk8 .section-bg');
//
//             var ThisACTION  = $('#section-sk8 .section-action');
//
//             var ThisPERSON  = ThisACTION.find('.action-person');
//             var ThisSHADOW  = ThisACTION.find('.action-shadow');
//
//
//             // var ThisPATH = [{x:0, y:0}, {x:-50, y:-250}, {x:-1000, y:550}];
//
//             // A NICE ARC FROM BOTTOM TO TOP, OVER THE CENTER BLOCK:
//             // var ThisPATH = [{x:-50, y:-250}, {x:-300, y:-300}];
//
//             var ThisPATH = {type:"thru", curviness:1, autoRotate:false, values:[{x:0, y:-50}, {x:-100, y:-150}, {x:-300, y:-200}]};
//
//
//
//
//
//             var ThisTLM = new TimelineMax({ease:Linear.easeNone});
//
//                 ThisTLM.set(ThisACTION, {left:'60%'});
//
//                 ThisTLM.to(ThisACTION, 1,  {bezier:ThisPATH}, 'a');
//                 ThisTLM.fromTo(ThisPERSON, 1, {rotation:50}, {rotation:-50}, 'a');
//                 ThisTLM.fromTo(ThisSHADOW, 1, {rotation:50}, {rotation:-50}, 'a');
//
//                 ThisTLM.fromTo(ThisINFO, 1, {top:'-15%'}, {top:'20%'}, 'a');
//                 // ThisTLM.fromTo(ThisHEADER,  1, {top:'41%'}, {top:'59%'   }, 'a');
//                 // ThisTLM.fromTo(ThisHEADER,  1, {top:'38%'}, {top:'55%'   }, 'a');
//
//                 ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'   }, 'a');
//
//
//
//             var ThisDuration = ThisSECTION.outerHeight();
//
//
//
//             var ThisSCENE = new ScrollMagic.Scene({
//                 triggerElement: ThisSECTION
//                 ,triggerHook:0.8
//             })
//             .offset(140)
//             .duration( ThisDuration + 200)
//             .setTween(ThisTLM)
//             .addTo(PT.SM_CTRL);
//
//
//             if(PT._isDevMode){
//                 ThisSCENE.addIndicators({name: "Home SK8 Section"});
//             }
//
//
//
//
//
//
//             NWG._ResetSMs.push(ThisSCENE);
//             NWG._ResetTLMs.push(ThisTLM);
//
//             NWG._ResetOBJs.push(ThisINFO);
//             NWG._ResetOBJs.push(ThisACTION);
//             NWG._ResetOBJs.push(ThisHEADER);
//
//
//         }
//
//
// /*
//
//      #####  #    # #    #
//      #    # ##  ##  #  #
//      #####  # ## #   ##
//      #    # #    #   ##
//      #    # #    #  #  #
//      #####  #    # #    #
//
// */
//
//         function buildBMX(){
//             PT.log('buildBMX()');
//
//             var ThisSECTION = $('#section-bmx');
//             var ThisHEADER  = $('#section-bmx .section-header');
//             var ThisINFO    = $('#section-bmx .section-info');
//             var ThisBG      = $('#section-bmx .section-bg');
//
//             var ThisACTION  = $('#section-bmx .section-action');
//             var ThisPERSON  = ThisACTION.find('.action-person');
//             var ThisSHADOW  = ThisACTION.find('.action-shadow');
//
//
//
//
//             var ThisTLM = new TimelineMax({ease:Linear.easeNone});
//
//                 ThisTLM.fromTo(ThisINFO, 1, {css:{top:'-15%'}}, {css:{top:'20%'}}, 'a');
//
//                 // ThisTLM.fromTo(ThisHEADER,  1, {top:'36%'}, {top:'55%'}, 'a');
//                 ThisTLM.fromTo(ThisHEADER,  1, {top:'21%'}, {top:'48%'}, 'a');
//
//
//                 ThisTLM.fromTo(ThisACTION, 1, {css:{left:'-40%'} },  {css:{left:'100%'} },'a');
//                 ThisTLM.fromTo(ThisPERSON, 1, {css:{rotation:-10} }, {css:{rotation:50} },'a');
//                 ThisTLM.fromTo(ThisSHADOW, 1, {css:{rotation:-10} }, {css:{rotation:50} },'a');
//
//
//
//             var ThisDuration = ThisSECTION.outerHeight();
//
//             var ThisSCENE = new ScrollMagic.Scene({
//                 triggerElement: ThisSECTION
//                 ,triggerHook:0.8
//             })
//             .offset(140)
//             .duration( ThisDuration )
//             .setTween(ThisTLM)
//             .addTo(PT.SM_CTRL);
//
//
//             if(PT._isDevMode){
//                 ThisSCENE.addIndicators({name: "Home BMX Section"});
//             }
//
//
//             NWG._ResetSMs.push(ThisSCENE);
//             NWG._ResetTLMs.push(ThisTLM);
//
//             NWG._ResetOBJs.push(ThisACTION);
//             NWG._ResetOBJs.push(ThisINFO);
//             NWG._ResetOBJs.push(ThisHEADER);
//
//
//         }
//
//
//
//
//
//
//
//
//
//
//     };
