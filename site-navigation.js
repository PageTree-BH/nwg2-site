





// $(function() {
//
//     NWG.buildNavigation_();
//
// });


NWG.buildNavigation_ = function() {
    PT.log('NWG.buildNavigation_()', 'blue');


    build_site_topbar();

    build_sidr();













/*

     ######  #### ######## ########    ########  #######  ########     ########     ###    ########
    ##    ##  ##     ##    ##             ##    ##     ## ##     ##    ##     ##   ## ##   ##     ##
    ##        ##     ##    ##             ##    ##     ## ##     ##    ##     ##  ##   ##  ##     ##
     ######   ##     ##    ######         ##    ##     ## ########     ########  ##     ## ########
          ##  ##     ##    ##             ##    ##     ## ##           ##     ## ######### ##   ##
    ##    ##  ##     ##    ##             ##    ##     ## ##           ##     ## ##     ## ##    ##
     ######  ####    ##    ########       ##     #######  ##           ########  ##     ## ##     ##

 */

    // ,build_site_topbar: function() {
    function build_site_topbar(){
        // var HomePlate = $('#my-homeplate');

        var topBar = $('#site-topbar');
        var topBarHeight = "-" + topBar.outerHeight() + 'px';
        topBar.addClass('fixy-top');

        // var triggerPos = topBar.outerHeight();
        // var triggerPos = topBar.outerHeight();
        var triggerPos = 0;
        var i1 = 0;
        var i2 = 0;

        var myScene = new ScrollMagic.Scene({
            triggerHook:0.5
        });
        myScene.addTo(PT.SM_CTRL);
        myScene.setPin(topBar, {pushFollowers: false});
        // myScene.offset(triggerPos);
        // myScene.offset(10);
        myScene.addIndicators();

        // myScene.on("enter", function (event) {
        //     $('.viewport').css({'padding-top':'100px'});
        //     topBar.addClass('fixy-top');
        // });
        //
        // myScene.on("leave", function (event) {
        //     $('.viewport').css({'padding-top':'0px'});
        //     topBar.removeClass('fixy-top');
        // });


        myScene.on("update", function() {
            var x1 = PT.SM_CTRL.info("scrollDirection");
            var x2 = $(window).scrollTop();
            var x3 = triggerPos;

            if ( x1 === "REVERSE" && x2 >= x3 && i1 === 0) {
                    // TweenMax.fromTo(topBar, 0.6, {top: topBarHeight}, {top: "0px", ease: Power1.easeInOut});
                    TweenMax.to(topBar, 0.6, {top: "0px", ease: Power1.easeInOut});
                i1++;
                i2 = 0;
            }
            if ( x1 === "FORWARD" && x2 > x3 && i2 === 0) {
                    // TweenMax.fromTo(topBar, 0.6, {top: "0px"}, {top: topBarHeight, ease: Power1.easeInOut});
                    TweenMax.to(topBar, 0.6, {top: topBarHeight, ease: Power1.easeInOut});
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

// ,buildSIDR: function(){
    function build_sidr(){

            // PT.log('buildSIDR()');

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


};
