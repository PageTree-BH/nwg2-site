
    // PT.addOnLoad(
        // NWG.build_HomePage_Video
        // build_Homepage_video
    // );

	var tag = document.createElement('script');
	var firstScriptTag = document.getElementsByTagName('script')[0];
	tag.src = "https://www.youtube.com/iframe_api";
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);






    // NWG.buildYouTubeVid = function(){

    function buildYouTubeVid(){
		console.log("~~~~~~~~~ buildYouTubeVid ()");

		var HP_player;
		var Mobile_player;

		var VID_HOLDER;

		var MobileVid_HOLDER;

		var HP_videoId = 'GudH-ELXsKE';





		// function onYouTubeIframeAPIReady() {
			console.log('!!YOUTUBE API IS READY!!');

			HP_player = new YT.Player('player', {
				height:'100%',
				width:'100%',
				videoId:HP_videoId,
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
				  'onStateChange': onPlayerStateChange
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

		// }



		function onPlayerStateChange(event) {
			if (event.data === YT.PlayerState.ENDED ) {

				$('.homeplate-video-button').html('<i class="fa fa-play"></i>Play Video').removeClass('isPlaying');

				TweenMax.to(VID_HOLDER, 0.2, { autoAlpha:0, onComplete:function(){
						VID_HOLDER.removeClass('showme');
					}
				});
			}
		}


		function hideHeaderPlateVid(){

			$('.homeplate-video-button').html('<i class="fa fa-play"></i> Play Video').removeClass('isPlaying');

			pauseVid();


			TweenMax.to(".homeplate-inner", 2, { autoAlpha:1 });

			TweenMax.to(VID_HOLDER, 2, { autoAlpha:0, onComplete:function(){
					VID_HOLDER.removeClass('showme');
					stopVid();
				}
			});

		}




		function showHeaderPlateVid(){

			VID_HOLDER.addClass('showme');

			$('.homeplate-video-button').html('<i class="fa fa-stop"></i> Stop Video').addClass('isPlaying');

			playVid();

			TweenMax.to(".homeplate-inner", 2, { autoAlpha:0 });

			TweenMax.set(VID_HOLDER, {autoAlpha:0});

			TweenMax.to(VID_HOLDER, 2, { autoAlpha:1 });

		}



		function pauseVid() {
			HP_player.pauseVideo();
		}

		function stopVid() {
			HP_player.stopVideo();
		}

		function restartVid() {
			HP_player.seekTo(30);
			HP_player.playVideo();
		}

		function playVid() {
			HP_player.playVideo();
		}








		// $(function() {

			VID_HOLDER = $('.homeplate-video');

			MobileVid_HOLDER = $('.mobile-video-holder');


			HP_videoId = $('.homeplate-video').data('video-id');
			console.log("HP_videoId = " + HP_videoId);

			$('.homeplate-video-button').on('click', function(e){
console.log("+++++++BUTTON CLICKED++++++++");
				e.preventDefault();

				if(Modernizr.touchevents) {

					MobileVid_HOLDER.addClass('showme');

				}else{

					$('.homeplate-video-button').html('IS NOT TOUCH');

					if( $(this).hasClass('isPlaying') ){
						hideHeaderPlateVid();
					}else{
						showHeaderPlateVid();
					}
				}
			});


			$('.closeBtn').on('click', function(e){
				e.preventDefault();
				hideHeaderPlateVid();
			});


			$('.mobile-video-closebtn').on('click', function(e){

				e.preventDefault();

				MobileVid_HOLDER.removeClass('showme');

				Mobile_player.stopVideo();

			});


		// });




    }
    // buildYouTubeVid();

PT.addOnLoad( buildYouTubeVid );
