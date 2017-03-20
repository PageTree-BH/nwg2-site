

console.log('newnew-vids.js');






//     PT.log(VID2.duration);
// PT.log(VID2.duration/100);
// PT.log(VID2.currentTime/VID2.duration);
// TweenMax.to(VID2, 5, {playbackRate:5});







// var VID2 = document.getElementById("VID2");
// VID2.autoplay = false;
// VID2.playbackRate = 2.5;
// // VID2.controls = false;
// VID2.muted = true;
// VID2.loop = true;




    function buildVid(){
        console.log('buildVid()');
            // $('[data-nwg-video-holder]').each(function(i, val){
            $('.sectionNWG').each(function(i, val){

                var ThisDIV = $(val);
                var ThisBG = ThisDIV.find('.sectionNWG__bg')[0];
                var ThisVID = ThisDIV.find('.sectionNWG__bgvideo')[0];

                ThisVID.autoplay = false;
                ThisVID.playbackRate = 2.5;
                ThisVID.controls = false;
                ThisVID.muted = true;
                ThisVID.loop = true;

                // TweenMax.set(ThisDIV, {opacity:0});
                var ThisTLM = new TimelineMax({ease:Power2.easeIn});

                    // ThisTLM.fromTo(ThisBG, 1, {opacity:1, top:0 }, {opacity:0, top:300 }, 'a');
                    // ThisTLM.fromTo(ThisDIV, 1, {opacity:1}, {opacity:0 }, 'a');

                // var ThisDuration = ThisDIV.outerHeight() + $(window).height();
                var ThisDuration = ThisDIV.outerHeight() + $(window).height()/2;

                var ThisSCENE = new ScrollMagic.Scene({
                    triggerElement: ThisDIV,
                    triggerHook:1
                })
                .duration( ThisDuration )
                .setTween( ThisTLM )
                .addTo(PT.SM_CTRL);

                ThisSCENE.on("enter", function (event) {
                    console.log('enter');
                    ThisVID.play();
                    // VID2.play();
                    // TweenMax.to(ThisDIV, 1, {opacity:1});
                });
                ThisSCENE.on("leave", function (event) {
                    console.log('leave');
                    ThisVID.pause();
                    // VID2.pause();
                    // TweenMax.to(ThisDIV, 1, {opacity:0});
                });
                ThisSCENE.on("progress", function (event) {
                    console.log('progress ' + event.progress);
                    // THIS WILL TIE THE VIDEO WITH THE SCROLL BAR:
                    // VID2.currentTime = VID2.duration * event.progress;
                    // ThisVID.currentTime = ThisVID.duration * event.progress;
                });

                ThisSCENE.addIndicators({name: "VideoHolder Trigger"});


            });

    }

    PT.addOnLoad( buildVid );
