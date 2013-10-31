jQuery.fn.extend({
  select_option: function(val){
    
    var drop = $(this).find('.drop');
    drop.children('div').removeClass('check');
    
    var needed = drop.find('div[data-value="'+val+'"]');
    if (drop.data('useHtml') == true)
      drop.siblings('.select').html(needed.first().html());
    else
      drop.siblings('.select').text(needed.first().text());
    needed.addClass('check');
    
    var select = drop.siblings('.newselect');
    select.children().removeAttr('selected')
           .end()
           .find('[value="'+val+'"]')
           .attr('selected','selected');
    select.change();
  }
});

(function($){

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

  $('#drop_form, #search-form').on('click', '.select', function(){
    $(this).parent('.new_sel').find('.drop').fadeIn('fast');
  });

  $(document).on('click', function(event) {
    if ( $(event.target).is('.drop, .new_sel, .select, .fader') ) return false;
    $(".drop").fadeOut('fast');
    
  });


  $('#drop_form, #search-form').on('click', '.drop > div', function(){
    var val = $(this).data('value');
    $(this).parents('.new_sel').select_option(val);
  });

  $(".new_sel div").each(function(){
    $(this).prepend("<span class='fader'></span>");
  });

}(jQuery));
