'use strict'

function Vegas3230(setting) {

	if(!(this instanceof  Vegas3230)){
		return new Vegas3230();
	}

	var arrItems = [];
	var curItems = []; //inScreenEllements

	function addElement(ell) {

		if(ell){

			if(typeof ell == 'object'){

				if(ell instanceof jQuery){
					console.log('Доболяю jQuery');
				}

				if(ell instanceof Element){
					console.log('Доболяю Element');
				}

				if(ell instanceof NodeList){
					console.log('Доболяю Elements');
				}
			}

			if(typeof ell == 'string'){

				console.log('Доболяю строку');
			}
			
		}
		
	}

	// returns the index or array of indexes of the visible items
	function getCurId() {

		if (!curItems.length) {
			return -1;
		}

		if (curItems.length == 1) {
			return curItems[0].index;
		}

		var arr = [];

		for (var i = 0; i < curItems.length; i++) {
			arr.push(curItems[i].index;)
		}

		return arr;
	}

	// returns element or array of the visible elements
	function getCurElements() {

		if (!curItems.length) {
			return -1;
		}

		if (curItems.length == 1) {
			return curItems[0].el;
		}

		var arr = [];

		for (var i = 0; i < curItems.length; i++) {
			arr.push(curItems[i].el;)
		}

		return arr;
	}

	return {
		addElement: addElement,
		getCurId: getCurId
	};
}

var setting = {}
var vegas = new Vegas3230(setting);

vegas.addElement($('window'));
vegas.addElement('window');
vegas.addElement(document.getElementById('item'));
vegas.addElement(document.querySelectorAll('.item'));