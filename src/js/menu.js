function toShowTheMenu(menuBtnId, menuId, menuBtnClassActive, menuClassActive) {
    var $menuBtn = $("#"+menuBtnId);
    var $menu = $("#"+menuId);

    $menuBtn.click(function (event) {
        $menuBtn.toggleClass(menuBtnClassActive);
        $menu.toggleClass(menuClassActive);

        event.stopPropagation();

        $(document).click( function menuActivated() {
            $menuBtn.removeClass(menuBtnClassActive);
            $menu.removeClass(menuClassActive);
            $(document).unbind('click', menuActivated);
        });
    });
}