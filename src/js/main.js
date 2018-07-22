$(document).ready(function () {
    toShowTheMenu('menu-mobile__btn', 'menu-mobile', 'menu-mobile__btn_activity_active', 'menu-mobile_visibility_visible');
    initialiseAnchorScroll();
    var validate = new Validate('form');
    validate.setHandlerOnField('form__name', validate.regName);
    validate.setHandlerOnField('form__email', validate.regEmail);
    validate.setHandlerOnField('form__textarea', validate.regTextarea);
    validate.btnSubmit('form__submit');
});

