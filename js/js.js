jQuery(document).ready(function(){
	function getScrollTop() {
			   var scrOfY = 0;
			   if( typeof( window.pageYOffset ) == "number" ) {
					   scrOfY = window.pageYOffset;
			   } else if( document.body
			   && ( document.body.scrollLeft
			   || document.body.scrollTop ) ) {
					   scrOfY = document.body.scrollTop;
			   } else if( document.documentElement
			   && ( document.documentElement.scrollLeft
				|| document.documentElement.scrollTop ) ) {
					   scrOfY = document.documentElement.scrollTop;
			   }
			   return scrOfY;
	}
	jQuery(window).scroll(function() {
		fixPaneRefresh();
	});
	
	function fixPaneRefresh(){
		if (jQuery("header").length) {
			var top  = getScrollTop();
			if (top >= 44) {jQuery("header nav ").slideUp(600);
						   jQuery("header .top_b").css("visibility","visible");
						   
			 }
			
			else {jQuery("header nav").slideDown(200);
			jQuery("header .top_b").css("visibility","hidden");
			}
		}
	}
	jQuery("header .top_b").click(function(){
	jQuery("header nav").slideToggle(300);
	});
	
});


//preload hover images
    var ImgArr, ImgLen;
    function Preload (url)
    {
        if (!ImgArr){
            ImgArr=new Array();
            ImgLen=0;
        }
        ImgArr[ImgLen]=new Image();
        ImgArr[ImgLen].src=url;
        ImgLen++;
    }
    Preload('image/green-btn28.png');
    Preload('image/blue-button-hover.png');
    Preload('image/button_h.png');
    Preload('image/button_h-comment.png');





(function(jQuery){
    $('select.newselect').addClass('hiden');
    $('.select').removeClass('hiden');
    $('.drop').removeClass('hiden');
    $('.select').click(function(){
        $(this).parent('.new_sel').find('.drop').fadeIn('fast');
    });
    $('*').click(function(event){
        var clas = $(this).attr('class');
        if(clas!='drop'&&clas!='new_sel'&&clas!='select'){
            $(".drop").fadeOut('fast');
        }
        (event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true));
    })


    $('.drop > div').click(function(){
        var vall = $(this).attr('value');
        var string = $(this).html();
        var r = /<(\w+)[^>]*>.*<\/\1>/gi;
        string = string.replace(r,"");

        $(this).closest('.new_sel').find('.select').html(string);
        $(this).closest('.new_sel').find('select option:selected').removeAttr("selected");
        $(this).closest('.new_sel').find('select option[value = '+vall+']').attr("selected", "selected");
        $.each($(this).parent().children('div.check'), function(){
            $(this).removeClass('check');
        });

        $(this).addClass('check');
        $(this).parent().fadeOut('fast');

        if($(this).parent().hasClass("primary")){
            var selectbox = $(this).attr("data-option");
            $('.intro .table .right .jktu div').removeClass('active');
            $('.con_' + selectbox).addClass('active');
        }
    });

    function addFader(){
        $(".new_sel .drop div").each(function(){
            $(this).prepend("<span class='fader'></span>");
        });
    }
    addFader();
}($));