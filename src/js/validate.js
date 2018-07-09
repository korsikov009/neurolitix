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