function initialiseAnchorScroll() {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"}, 400);
        return false;
    });
};

