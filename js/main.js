$(document).ready(function () {
    $(document).ready(function () {
        $(window).load(function () {
            $('.preloader').fadeOut(1000, function () { $(this).remove(); });
        });
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() <= 50) {
            $("#home-nav").removeClass("scroll");
        } else {
            $("#home-nav").addClass("scroll");
        }
    });
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 70	// Height of fixed nav
                    }, 1000);
                    return false;
                }
            }
        });
    });
});
