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
	$(window).scroll(function() {
		fixPaneRefresh();
	});
	
	function fixPaneRefresh(){
		if ($("header").length) {
			var top  = getScrollTop();
			if (top >= 44) {
                $("header nav ").slideUp(600);
				$("header .top_b").css("visibility","visible");
						   
			} else {
                jQuery("header nav").slideDown(200);
			    jQuery("header .top_b").css("visibility","hidden");
			}
		}
	}
	$("header .top_b").click(function(){
    	$("header nav").slideToggle(300);
    });

});


//preload hover images
    var ImgArr = [], ImgLen = 0;
    function Preload (url)
    {
        ImgArr[ImgLen] = new Image();
        ImgArr[ImgLen].src = url;
        ImgLen++;
    }
    Preload('image/green-btn28.png');
    Preload('image/blue-button-hover.png');
    Preload('image/button_h.png');
    Preload('image/button_h-comment.png');

(function($){
    $('select.newselect').addClass('hidden');
    $('.select').removeClass('hidden');
    $('.drop').removeClass('hidden');
    $('.select').click(function(){
        $(this).parent('.new_sel').find('.drop').fadeIn('fast');
    });
    $('div').click(function(event) {
        var divClass = $(this).attr('class');
        if (divClass != 'drop' && divClass != 'new_sel' && divClass != 'select') {
            $(".drop").fadeOut('fast');
        }
        (event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true));
    });


    $('.drop > div').click(function(){
        var val = $(this).data('value');
        var string = $(this).html();
        var r = /<(\w+)[^>]*>.*<\/\1>/gi;
        string = string.replace(r,"");

        $(this).closest('.new_sel').find('.select').html(string);
        $(this).closest('.new_sel').find('select option:selected').removeAttr("selected");
        $(this).closest('.new_sel').find('select option[value = '+val+']').attr("selected", "selected");
        $.each($(this).parent().children('div.check'), function(){
            $(this).removeClass('check');
        });

        $(this).addClass('check');
        $(this).parent().fadeOut('fast');

        if ($(this).parent().hasClass("primary")) {
            var selectbox = $(this).data("option");
            $('.jktu div').removeClass('active');
            $('.con_' + selectbox).addClass('active');
        }
    });

    function addFader(){
        $(".new_sel div").each(function(){
            $(this).prepend("<span class='fader'></span>");
        });
    }
    addFader();
}($));