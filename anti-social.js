window.setInterval(function(){
	var buttons = document.getElementsByClassName("UFILikeLink")

	for (index = 0; index < buttons.length; ++index) { 
		var button = buttons[index];
		button.parentNode.removeChild(button);
	}
}, 2000);
