$('document').ready(function() {

    
    //HEADER.HTML
    
    
    $(".menu-tog").click( function (e){
        e.preventDefault();
        $("#wrapper").toggleClass("menuDisplayed");
    });

            
    $(".sidebar-toggle-link").click( function (e){

        e.preventDefault();

        $collapse = $(this).next().css("border-left","5px solid #1A7AB9");

        var x = $(this).css('background-color');

        if (x == "rgb(44, 62, 80)")
            $(this).css("background-color","rgb(55,75,94)");

        if (x == "rgb(55, 75, 94)")
            $(this).css("background-color","rgb(44, 62, 80)");

        $header = $(this);

        $content = $header.next();

        $content.slideToggle(500, function () {

            $header.next(function () {
                return $content.is(":visible") ? $header.attr('name') :$header.attr('name');
            });

        });


        input = $(this).closest('.parent-div').find('.fa-chevron-down');

        if(input.hasClass('rotate'))
            input.removeClass('rotate');
        else    
            input.addClass('rotate');

    });

    $('.dropdown-toggle').dropdown();
    
    
    //MODULE1:CONFIG
    
    
    $('.fa-pencil-square-o').click(function(){

        input = $(this).closest('.form-group').find('input[type=number]');
        $(this).hide();
        input.prop('disabled', false);
        $('.btn-success').show();
        $('.btn-warning').show();

    });
    
    
    //
});