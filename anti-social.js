window.setInterval(function(){

	removeClassElements();
	removeQuerySelectorElements();

}, 2000);


function removeClassElements() {
	var elements = document.getElementsByClassName("UFILikeLink");

	for (index = 0; index < elements.length; ++index) { 
		var element = elements[index];
		element.parentNode.removeChild(element);
	}
}

function removeQuerySelectorElements() {
	var elements = document.querySelectorAll('[data-sigil*="ufi-inline-like"]');

	for (index = 0; index < elements.length; ++index) { 
		var element = elements[index];
		element.parentNode.removeChild(element);
	}

}
