'use strict'

function Vegas3230(setting) {

	if(!(this instanceof  Vegas3230)){
		return new Vegas3230();
	}

	var arrItems = [];

	function addElement(ell) {
		console.log(ell);

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

	return {
		addElement: addElement
	};
}

var setting = {}
var vegas = new Vegas3230(setting);

vegas.addElement($('window'));
vegas.addElement('window');
vegas.addElement(document.getElementById('item'));
vegas.addElement(document.querySelectorAll('.item'));