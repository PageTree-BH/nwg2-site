

// console.log('buildBgVids.js');




    function buildBgVids(){
        console.log('buildBgVids()');
            // $('[data-nwg-video-holder]').each(function(i, val){
            // $('.sectionNWG').each(function(i, val){
            $('[data-bgVidSpeed]').each(function(i, val){

                var ThisDIV = $(val);

                // var ThisBG = ThisDIV.find('.sectionNWG__bg')[0];
                // var ThisVID = ThisDIV.find('.sectionNWG__bgvideo')[0];
                var ThisVID = ThisDIV.find('video')[0];

                var playbackStyle = ThisDIV.data('bgvidspeed');

        console.log(ThisDIV.find('video source')[0]);
        if( ThisDIV.find('video source')[0] ){



                ThisVID.autoplay = false;
                ThisVID.controls = false;
                ThisVID.muted = true;
                ThisVID.loop = true;

                var ThisTLM = new TimelineMax({ease:Power2.easeIn});
                    // ThisTLM.fromTo(ThisDIV, 1, {opacity:0}, {opacity:1 }, 'a');
                    // ThisTLM.fromTo(ThisDIV, 1, {opacity:1}, {opacity:0 }, 'b');

                var ThisDuration = ThisDIV.outerHeight() + $(window).height();

                var ThisSCENE = new ScrollMagic.Scene({
                    triggerElement: ThisDIV,
                    triggerHook:1
                })
                .duration( ThisDuration )
                .setTween( ThisTLM )
                .addTo(PT.SM_CTRL);

                if(PT._isDevMode){
                    ThisSCENE.addIndicators({name: "VideoHolder Trigger"});
                }



                if(playbackStyle === "scrub"){
                    ThisSCENE.on("progress", function (event) {
                        // console.log('progress ' + event.progress);
                        // THIS WILL TIE THE VIDEO WITH THE SCROLL BAR:
                        ThisVID.currentTime = ThisVID.duration * event.progress;
                    });
                }else{

                    if(playbackStyle){
                        ThisVID.playbackRate = parseFloat(playbackStyle);
                    }

                    ThisSCENE.on("enter", function (event) {
                        // console.log('enter');
                        ThisVID.play();
                        // TweenMax.to(ThisDIV, 1, {opacity:1});
                    });
                    ThisSCENE.on("leave", function (event) {
                        // console.log('leave');
                        ThisVID.pause();
                        // TweenMax.to(ThisDIV, 1, {opacity:0});
                    });
                }


}



            });




    }

    PT.addOnLoad( buildBgVids );
