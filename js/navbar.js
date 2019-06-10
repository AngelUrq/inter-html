$(document).ready(function () {
    let elemento_navbar = $('.elemento-navbar');

    elemento_navbar.css("color", "white");

    elemento_navbar.mouseover(function () {
        $(this).css("color", "rgb(188, 199, 39)");
    });
    elemento_navbar.mouseout(function () {
        $(this).css("color", "white");
    });

    var win = $(this);
    if(win.width() <= 700) {
        $('#logo2').attr("style", "display:none");
        $('#logo1').attr("style", "");
        elemento_navbar.css("color", "rgb(41,47,109)");
        elemento_navbar.mouseout(function () {
            $(this).css("color", "rgb(41,47,109)");
        });
    }

    (function ($) {
        $(document).ready(function () {
            $(window).on('resize', function(){
                var win = $(this);
                if (win.width() <= 700) {
                    $('.navbar').addClass('bg-light');
                    elemento_navbar.css("color", "rgb(41,47,109)");
                    elemento_navbar.mouseout(function () {
                        $(this).css("color", "rgb(41,47,109)");
                    });

                    $('#logo2').attr("style", "display:none");
                    $('#logo1').attr("style", "");
                }
            });

            $(window).scroll(function () {
                if ($(this).scrollTop() > $(window).height() - $('.navbar').height()) {
                    $('.navbar').addClass('bg-light');

                    elemento_navbar.css("color", "rgb(41,47,109)");
                    elemento_navbar.mouseout(function () {
                        $(this).css("color", "rgb(41,47,109)");
                    });

                    $('#logo2').attr("style", "display:none");
                    $('#logo1').attr("style", "");
                } else {
                    if($(this).width() > 500){ 
                        $('.navbar').removeClass('bg-light');
                        elemento_navbar.css("color", "white");

                        elemento_navbar.mouseout(function () {
                            $(this).css("color", "white");
                        });

                        $('#logo2').attr("style", "");
                        $('#logo1').attr("style", "display:none");
                    }
                }
            });
        });
    }($));
})