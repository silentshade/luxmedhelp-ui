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

jQuery.fn.extend({
    check_checkbox: function(){
        $(this).prop('checked',true).attr('checked','checked').addClass('active');
    },
    uncheck_checkbox: function(){
        $(this).prop('checked',false).removeAttr('checked').removeClass('active');
    },
    toggle_checkbox: function(){
        if ($(this).attr('checked')) $(this).uncheck_checkbox();
        else $(this).check_checkbox();
    }
});

function filter_ailments(treatment_id){
    var ailments = $('.ailments');
    ailments.select_option(-1);
    ailments.find('.drop div').show().each(function(){
        if ($(this).data('treatment') != treatment_id.toString() && !$(this).hasClass('check') )
            $(this).hide();
    });
}
function unblock_ailments(){
    var ailments = $('.ailments');
    ailments.removeClass('inactive').find('div.select').text('Выберите заболевание');
}
function block_ailments(){
    var ailments = $('.ailments');
    ailments.addClass('inactive').find('div.select').text('Выберите направление');
}

$(function(){

//    function getScrollTop() {
//        var scrOfY = 0;
//        if( typeof( window.pageYOffset ) == "number" ) {
//            scrOfY = window.pageYOffset;
//        } else if( document.body
//            && ( document.body.scrollLeft
//            || document.body.scrollTop ) ) {
//            scrOfY = document.body.scrollTop;
//        } else if( document.documentElement
//            && ( document.documentElement.scrollLeft
//            || document.documentElement.scrollTop ) ) {
//            scrOfY = document.documentElement.scrollTop;
//        }
//        return scrOfY;
//    }
//    $(window).scroll(function() {
//        fixPaneRefresh();
//    });

//    function fixPaneRefresh(){
//        if ($("header").length) {
//            var top  = getScrollTop();
//            if (top >= 44) {
//                $("header nav ").slideUp(600);
//                $("header .top_b").css("visibility","visible");
//            } else {
//                jQuery("header nav").slideDown(200);
//                jQuery("header .top_b").css("visibility","hidden");
//            }
//        }
//    }

//    $("header .top_b").click(function(){
//        $("header nav").slideToggle(300);
//    });

    $('form.clinics-filter-form').on('click', '.select', function(){
        var new_sel = $(this).parent('.new_sel');
        if(new_sel.hasClass('inactive')) return false;
        new_sel.find('.drop').fadeIn('fast');
    }).on('click', '.drop > div', function(){
            var val = $(this).data('value');
            var new_sel = $(this).parents('.new_sel');
            if (new_sel.hasClass('treatments')){
                if (val > -1){
                    unblock_ailments();
                    filter_ailments(val);
                }
                else if (val == -1) block_ailments();
            }
            new_sel.select_option(val);
        });

    $(document).on('click',  function(event) {
        if ( !$(event.target).is('.drop, .new_sel, .select, .fader') )
            $(".drop").fadeOut('fast');
    });

    $(".new_sel div").each(function(){
        $(this).prepend("<span class='fader'></span>");
    });



});
