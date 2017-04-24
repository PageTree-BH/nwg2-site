




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

    function animatePageHeader() {
        PT.log('animatePageHeader()');


        if(PT._isPreLoaded){
            doNow();
        }else{
            PT.addOnLoad(
               doNow
            );
        }

        function doNow(){

            $('[data-nwg-animate-header]').each(function(i, val){

                var ThisDIV = $(val);
                var ThisBG = ThisDIV.find('.pageHeaderNWG__bg');


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
                    // ThisSCENE.addIndicators({name: "Article Header"});
                }


                NWG._ResetSMs.push(ThisSCENE);
                NWG._ResetTLMs.push(ThisTLM);
                NWG._ResetOBJs.push(ThisBG);

            });

        }

    }

    PT.addOnLoad( animatePageHeader );
