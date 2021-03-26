function key_down(e) {
	var key = e.keyCode || e.which;
	console.log(Keyboard.getNameOfKeyCode(key));
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

	static getNameOfKeyCode(keyCode){
		var stringFromCharCode = String.fromCharCode(keyCode);

		if(Keyboard.keyboardMap[keyCode]) {
			stringFromCharCode = Keyboard.keyboardMap[keyCode];
		}

		return stringFromCharCode;
	}

	static getKeyState(e) {
		return Keyboard.key[e];
	}
}
Keyboard.keyboardMap[9];  // TAB
Keyboard.keyboardMap[13];  // ENTER
Keyboard.keyboardMap[16];  // SHIFT
Keyboard.keyboardMap[17];  // CONTROL
Keyboard.keyboardMap[18];  // ALT
Keyboard.keyboardMap[20];  // CAPS_LOCK
Keyboard.keyboardMap[32];  // SPACE
Keyboard.keyboardMap[37];  // LEFT
Keyboard.keyboardMap[38];  // UP
Keyboard.keyboardMap[39];  // RIGHT
Keyboard.keyboardMap[40];  // DOWN
Keyboard.keyboardMap[91];  // OS_KEY


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



/*
Author: Fabian Krupinski
Created at: 13.02.2020 09:27
Perfected: Alex Sinkus
Finished at: 25.03.2021
*/
