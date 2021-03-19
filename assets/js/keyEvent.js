function key_down(e) {
	var key = e.keyCode || e.which;
	Keyboard.key[key] = true;
}
function key_up(e) {
	var key = e.keyCode || e.which;
	Keyboard.key[key] = false;
}

window.addEventListener('keydown', key_down, false);
window.addEventListener('keyup', key_up, false);

class Keyboard {

	static key = new Array();
	static keyboardMap = new Array();
	
	static keyboardMap[9];  // TAB
	static keyboardMap[13];  // ENTER
	static keyboardMap[16];  // SHIFT
	static keyboardMap[17];  // CONTROL
	static keyboardMap[18];  // ALT
	static keyboardMap[20];  // CAPS_LOCK
	static keyboardMap[32];  // SPACE
	static keyboardMap[37];  // LEFT
	static keyboardMap[38];  // UP
	static keyboardMap[39];  // RIGHT
	static keyboardMap[40];  // DOW
	static keyboardMap[91];  // OS_KEY
	

	static getKeyState(e) {
		return Keyboard.key[e];
	}
}

Keyboard = new Keyboard();

window.addEventListener('onfocusout', function() {
	for(var i in Keyboard.key) {
		Keyboard.key[i] = false;
	}
});
window.addEventListener('onblur', function() {
	for(var i in Keyboard.key) {
		Keyboard.key[i] = false;
	}
});
document.addEventListener('oncontextmenu', function() {
	for(var i in Keyboard.key) {
		Keyboard.key[i] = false;
	}
});





function convertInfosintoActions() {
	
	var stringFromCharCode = String.fromCharCode();
	
	if keyboardMap[e] {
		stringFromCharCode = keyboardMap[e];
	}
	
	return stringFromCharCode;
	
}

/*
Author: Fabian Krupinski
Created at: 13.02.2020 09:27 
*/
