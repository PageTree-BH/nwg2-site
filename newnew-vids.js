

console.log('newnew-vids.js');

// var VID1 = document.getElementById("VID1");
var VID2 = document.getElementById("VID1");
// var VID3 = document.getElementById("VID3");


// VID1.defaultPlaybackRate = 0.5;
// VID1.autoplay = true;
// VID1.playbackRate = 0.5;
// VID1.controls = false;
// VID1.muted = true;
// VID1.loop = true;

// VID2.defaultPlaybackRate = 2;
VID2.autoplay = false;
VID2.playbackRate = 2.5;
// VID2.controls = false;
VID2.muted = true;
VID2.loop = true;





    // function vidplay() {
    //    var video = document.getElementById("Video1");
    //    var button = document.getElementById("play");
    //    if (video.paused) {
    //       video.playbackRate = 5.2;
    //       video.play();
    //       button.textContent = "||";
    //    } else {
    //       video.pause();
    //       button.textContent = ">";
    //    }
    // }
    //
    // function restart() {
    //     var video = document.getElementById("Video1");
    //     video.currentTime = 0;
    // }
    //
    // function skip(value) {
    //     var video = document.getElementById("Video1");
    //     video.currentTime += value;
    // }





//     PT.log(VID2.duration);
    // PT.log(VID2.duration/100);
    // PT.log(VID2.currentTime/VID2.duration);
// TweenMax.to(VID2, 5, {playbackRate:5});

    function buildVid(){
        console.log('buildVid()');
            $('[data-nwg-video-holder]').each(function(i, val){

                var ThisDIV = $(val);
                // var ThisBG = ThisDIV.find('.header-bg');
                // TweenMax.set(ThisDIV, {opacity:0});
                var ThisTLM = new TimelineMax({ease:Power2.easeIn});

                    // ThisTLM.fromTo(ThisBG, 1, {opacity:1, top:0 }, {opacity:0, top:300 }, 'a');
                    // ThisTLM.fromTo(ThisDIV, 1, {opacity:1}, {opacity:0 }, 'a');

                var ThisDuration = ThisDIV.outerHeight() + $(window).height();

                var ThisSCENE = new ScrollMagic.Scene({
                    triggerElement: ThisDIV,
                    triggerHook:1
                })
                .duration( ThisDuration )
                .setTween( ThisTLM )
                .addTo(PT.SM_CTRL);

                ThisSCENE.on("enter", function (event) {
                    console.log('enter');
                    VID2.play();
                    // TweenMax.to(ThisDIV, 1, {opacity:1});
                });
                ThisSCENE.on("leave", function (event) {
                    console.log('leave');
                    VID2.pause();
                    // TweenMax.to(ThisDIV, 1, {opacity:0});
                });
                ThisSCENE.on("progress", function (event) {
                    console.log('progress ' + event.progress);
                    // THIS WILL TIE THE VIDEO WITH THE SCROLL BAR:
                    // VID2.currentTime = VID2.duration * event.progress;
                });

                ThisSCENE.addIndicators({name: "VideoHolder Trigger"});


            });

    }
    PT.addOnLoad(
       buildVid
    );
