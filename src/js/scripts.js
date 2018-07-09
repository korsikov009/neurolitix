$(document).ready(function () {
    toShowTheMenu('menu-mobile__btn', 'menu-mobile', 'menu-mobile__btn_activity_active', 'menu-mobile_visibility_visible');

    var validate = new Validate('form');
    validate.setHandlerOnField('form__name', validate.regName);
    validate.setHandlerOnField('form__email', validate.regEmail);
    validate.setHandlerOnField('form__textarea', validate.regTextarea);
    validate.btnSubmit('form__submit');
});


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


function Validate(formId) {

    var $form = $('#' + formId);

    this.regName = /^[а-яА-ЯёЁa-zA-Z_]+$/;
    this.regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.regTextarea = /^/;

    function checkField(elem, reg) {
        $form.find('[data-require="required"]').each(function() {
            if (!this.value) {
                $(this).removeClass('bad-field');
            }
        });
        (reg.test(elem.value) || !elem.value) ? $(elem).removeClass('bad-field') : $(elem).addClass('bad-field');
    }

    this.setHandlerOnField = function (elemId, reg) {
        $('#' + elemId).on('input', function () {
            checkField(this, reg);
        });
    }

    this.btnSubmit = function (btnId) {
        var $btn = $('#' + btnId);

        $btn.click(function(event) {
            $form.find('[data-require="required"]').each(function() {
                if (!this.value) {
                    $(this).addClass('bad-field');
                }
            });

            if ($form.find('.bad-field').length) {
                event.preventDefault();
            }
            else {
                $form[0].submit();
            }
        });
    }
}