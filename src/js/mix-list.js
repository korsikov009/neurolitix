;(function () {
	var list = document.getElementsByClassName('preview__list')[0];

	function toMixList() {
	    var listLi = list.getElementsByClassName('preview__li');

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

