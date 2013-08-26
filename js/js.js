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
		if (jQuery(".header").length) {
			var top  = getScrollTop();
			if (top >= 44) {jQuery(".header .nav ").slideUp(600);
						   jQuery(".header .top_b").css("visibility","visible");
						   
			 }
			
			else {jQuery(".header .nav").slideDown(200);
			jQuery(".header .top_b").css("visibility","hidden");
			}
		}
	}
	jQuery(".header .top_b").click(function(){
	jQuery(".header .nav").slideToggle(300);
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

	