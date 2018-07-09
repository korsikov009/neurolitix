toShowTheMenu('menu-mobile__btn', 'menu-mobile','menu-mobile__btn_activity_active' ,'menu-mobile_visibility_visible');
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
;(function () {
    var list = document.getElementsByClassName('preview__flex-container')[0];

    function toMixList() {
        var listLi = list.getElementsByClassName('preview__flex-item');

        list.appendChild(listLi[1]);
        list.appendChild(listLi[0]);
        list.appendChild(listLi[1]);
        list.appendChild(listLi[1]);
        list.appendChild(listLi[0]);
    }

    if (document.documentElement.clientWidth < 999) {
        toMixList();
    }
})();

