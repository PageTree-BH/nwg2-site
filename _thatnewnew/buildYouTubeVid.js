
    // PT.addOnLoad(
        // NWG.build_HomePage_Video
        // build_Homepage_video
    // );

	var tag = document.createElement('script');
	var firstScriptTag = document.getElementsByTagName('script')[0];
	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);






    // NWG.buildYouTubeVid = function(){

    function bgYouTubeVid( _this_ ){
		console.log("~~~~~~~~~ buildYouTubeVid ~*~*~*~*~*~*~*~*~*~*~*~ ()");

		var _THIS_ = $(_this_);

		var BG_player;
		var Mobile_player;

		var VID_HOLDER;

		var MobileVid_HOLDER;

		var HP_videoId = 'GudH-ELXsKE';



		BG_player = new YT.Player('player', {
			height:'100%',
			width:'100%',
			// videoId:HP_videoId,
			videoId:'GudH-ELXsKE',
			playerVars: {
				'autoplay': 0,
				'rel':0,
				'controls': 0,
				'modestbranding':1,
				'showinfo':0,
				'iv_load_policy':3,
				'playsinline':0
			},
			events:{
			  'onStateChange': bgYouTubeVid_onPlayerStateChange
			}
		});

		Mobile_player = new YT.Player('mobile-player', {
			height:'100%',
			width:'100%',
			videoId:'GudH-ELXsKE',
			playerVars: {
				'autoplay': 0,
				'rel':0,
				'controls': 0,
				'modestbranding':1,
				'showinfo':0,
				'iv_load_policy':3,
				'playsinline':0
			},
			events:{
			}
		});




		function bgYouTubeVid_onPlayerStateChange(event) {
			if (event.data === YT.PlayerState.ENDED ) {

$('.homeplate-video-button').html('<i class="fa fa-play"></i>Play Video').removeClass('isPlaying');

				TweenMax.to(VID_HOLDER, 0.2, { autoAlpha:0, onComplete:function(){
						VID_HOLDER.removeClass('showme');
					}
				});
			}
		}


		// function hideHeaderPlateVid(){
		function bgYouTubeVid_HIDE(){

$('.homeplate-video-button').html('<i class="fa fa-play"></i> Play Video').removeClass('isPlaying');

pauseVid();


			TweenMax.to(".homeplate-inner", 2, { autoAlpha:1 });

			TweenMax.to(VID_HOLDER, 2, { autoAlpha:0, onComplete:function(){
					VID_HOLDER.removeClass('showme');
stopVid();
				}
			});

		}




		// function showHeaderPlateVid(){
		function bgYouTubeVid_SHOW(){

			VID_HOLDER.addClass('showme');

$('.homeplate-video-button').html('<i class="fa fa-stop"></i> Stop Video').addClass('isPlaying');

playVid();

// TweenMax.to(".homeplate-inner", 2, { autoAlpha:0 });

			TweenMax.set(VID_HOLDER, {autoAlpha:0});

			TweenMax.to(VID_HOLDER, 2, { autoAlpha:1 });

		}



		function pauseVid() {
			BG_player.pauseVideo();
		}

		function stopVid() {
			BG_player.stopVideo();
		}

		function restartVid() {
			BG_player.seekTo(30);
			BG_player.playVideo();
		}

		function playVid() {
			console.log('playVid motherfucker');
			BG_player.playVideo();
			// console.log(BG_player);
		}








		// $(function() {

// VID_HOLDER = $('.homeplate-video');
VID_HOLDER = _THIS_;

MobileVid_HOLDER = $('.mobile-video-holder');


HP_videoId = VID_HOLDER.data('video-id');

	// console.log("HP_videoId = " + HP_videoId);

// $('.homeplate-video-button').on('click', function(e){
$('.btn-video').on('click', function(e){

				// console.log("+++++++BUTTON CLICKED++++++++");
				e.preventDefault();

				if(Modernizr.touchevents) {

					MobileVid_HOLDER.addClass('showme');

				}else{

// $('.homeplate-video-button').html('IS NOT TOUCH');
// $('.btn-video').html('IS NOT TOUCH');

					if( $(this).hasClass('isPlaying') ){
						bgYouTubeVid_HIDE();
					}else{
						bgYouTubeVid_SHOW();
					}
				}
			});


_THIS_.find('.closeBtn').on('click', function(e){
	e.preventDefault();
	// hideHeaderPlateVid();
	bgYouTubeVid_HIDE();
});


$('.mobile-video-closebtn').on('click', function(e){
	e.preventDefault();
	MobileVid_HOLDER.removeClass('showme');
	Mobile_player.stopVideo();
});


		// });




    }
    // buildYouTubeVid();


	function buildYouTubeVid(){
console.log('buildYouTubeVid()()()()()()()()()()())()))))()()()())()(  )');
		bgYouTubeVid( $('.bgYouTubeVid')[0] );

	}

PT.addOnLoad( buildYouTubeVid );
