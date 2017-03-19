



// THIS IS A WAY TO ADD A NEW FUNCTION / METHOD / VARIABLES OR WHATEVER TO THE NWG OBJECT.








$(function() { 

    // if( !Modernizr.touchevents ){
    //     PT.log('no touchevents!', 'red');

    //     if ( (PT.getSize() === 'md') || (PT.getSize() === 'lg') || (PT.getSize() === 'xl') ) {
    //         PT.log('````````` YOU ARE ARE BIG ENOUGH ! ' + PT.getSize(), 'red');

    //         PT.buildHomePlate();

    //     }else{
    //         PT.log('````````` SORRY BUB, YOU ARE TOO SMALL ' + PT.getSize(), 'red');
    //     }

    // }


    // console.log("!!!!!!!!!!!!!!! 111");


    NWG.buildModal();

}); 
   

 




 

NWG.buildModal = function() {


        // SIMPLE LITTLE COOKIE FRAMEWORK FROM MOZILLA:
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework




 

    if( $('[data-nwg-modal]').length ){


        var ThisDIV         = $('[data-nwg-modal]');
        var ThisINNER       = ThisDIV.find('.nwg-modal-inner');


        var ThisTLM = new TimelineMax({paused:true});

            ThisTLM.fromTo(ThisDIV,    0.3,   { opacity:0 }, { opacity:1, display:'block', ease:Power2.easeOut }, 'a');
            // ThisTLM.fromTo(ThisINNER,  0.5,   { opacity:0, scale:0.8, x:'50%', y:'50%'}, { opacity:1, scale:1, ease:Power2.easeOut });
            ThisTLM.fromTo(ThisINNER,  0.5,   { opacity:0}, { opacity:1, ease:Power2.easeOut });


 
        var ThisSCENE = new ScrollMagic.Scene({
            // triggerElement: $('.main'),
            // triggerElement: $('window'),
            offset:500,
            triggerHook:0.4
        })
        .on("enter", modalFunk )
        .addTo(PT.SM_CTRL);

        // if(PT._isDevMode){
            ThisSCENE.addIndicators({name: "data-nwg-modal"});
        // }
        
        function modalFunk(e){
            ThisSCENE.destroy();
            $('body').addClass('noscroll');
            ThisTLM.play();
        }
        
        $('.nwg-modal-close').on('click',function(e){
            e.preventDefault();
            // console.log('LICK');
            ThisTLM.reverse();
            $('body').removeClass('noscroll');
        })





        // SET COOKIES:
        // if( docCookies.getItem('farly2') ) {
        //     console.log('~~~~~~~ yes farly ~~~~~~~~');
        //     ThisSCENE.enabled(false);
        //     ThisSCENE.destroy();
        // } else {
        //     console.log('~~~~~~~ no farly ~~~~~~~~')
        //     ThisSCENE.enabled(true);
        // }


        // 20 SECONDS:
        // docCookies.setItem('farly2', 'hello farly2', 20);
        // ONE DAY:
        // docCookies.setItem('modal', 'hello modal', Infinity, '/');






/*
$('#report_396>button').on('click', function(e){
    
    e.preventDefault();

    TweenMax.to('#report_396', 0.5, {opacity:0, visibility:'hidden', onComplete:function(){
        
        TweenMax.fromTo('.nwg-modal-form-success', 1, {opacity:0}, {opacity:1, display:'flex', onComplete:function(){

            TweenMax.delayedCall(1, function(){
                ThisTLM.reverse();
                $('body').removeClass('noscroll');
            })

        }});

    }});
});
*/


        // $("#report_396").find('.btn').html('Submit')
        


        //  USED FOR THE CUSTOMIZED CONTACT FORM  
        $('#report_396').submit(function() {
            
            var form = $(this);
            var requestUrl = form.attr("action");
            var requestData = form.serialize();
            
            $("button[type=submit]", form).html('<i class="fa fa-spinner fa-spin"></i> Sending...').attr("disabled", "disabled");
            
            $(".error-message", form).remove();
            
            $('.error-outline').removeClass('error-outline');
            
            $.ajax({
                type: "POST",
                url: requestUrl,
                data: requestData,
                dataType: 'json',
                success: function(data, status){

                    if (data.success) {
                    
                        console.log('form YES success');
                    




    TweenMax.to('#report_396', 0.5, {opacity:0, visibility:'hidden', onComplete:function(){
        
        TweenMax.fromTo('.nwg-modal-form-success', 1, {opacity:0}, {opacity:1, display:'flex', onComplete:function(){

            TweenMax.delayedCall(1, function(){
                // ThisTLM.reverse();
                TweenMax.to('[data-nwg-modal]', 1, {opacity:0, display:'none'});

                $('body').removeClass('noscroll');

            })

        }});

    }});



                    } else {
                        console.log('form NO success');
                        if (data.errors && data.errors.length > 0){
                            $(data.errors).each(function(i, v){
                                if (typeof $('#ReportsResponse_' + v.id) != "undefined") {
                                    var errorMessage = $('#ReportsResponse_' + v.id).data('error-message');
                                    
                                    if (!errorMessage)
                                        errorMessage = 'Is required';
                                    
                                    $('#ReportsResponse_' + v.id).addClass('error-outline').append('<span class="error-message">'+errorMessage+'</span>');
                                }
                            });
                        }
                    }
                    $("button[type=submit]", form).html('Submit').removeAttr("disabled");
                }
            });
            return false;
        });
    








    }

}


 


    


 





 
 

 

























