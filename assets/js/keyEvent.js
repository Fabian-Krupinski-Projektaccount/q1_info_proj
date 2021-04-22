function key_down(e){var key=e.keyCode||e.which;console.log(Keyboard.getNameOfKey(key));Keyboard.key[key]=!0}
function key_up(e){var key=e.keyCode||e.which;Keyboard.key[key]=!1}
window.addEventListener('keydown',key_down,!1);window.addEventListener('keyup',key_up,!1);class Keyboard{static key=new Array();static keyboardMap=new Array();static getNameOfKey(key){var keyName=String.fromCharCode(key);console.log('Code: '+key);if(Keyboard.keyboardMap[key]){keyName=Keyboard.keyboardMap[key]}
return keyName}
static getKeyState(e){return Keyboard.key[e]}}
Keyboard.keyboardMap[9]='Tab';Keyboard.keyboardMap[13]='Enter';Keyboard.keyboardMap[16]='Shift';Keyboard.keyboardMap[17]='Ctrl';Keyboard.keyboardMap[18]='Alt';Keyboard.keyboardMap[20]='Caps';Keyboard.keyboardMap[32]='Space';Keyboard.keyboardMap[37]='Left Arrow';Keyboard.keyboardMap[38]='Up Arrow';Keyboard.keyboardMap[39]='Right Arrow';Keyboard.keyboardMap[40]='Down Arrow';Keyboard.keyboardMap[91]='Os Key';window.addEventListener('onfocusout',function(){for(var i in Keyboard.key){Keyboard.key[i]=!1}});window.addEventListener('onblur',function(){for(var i in Keyboard.key){Keyboard.key[i]=!1}});document.addEventListener('oncontextmenu',function(){for(var i in Keyboard.key){Keyboard.key[i]=!1}})

/*
function key_down(e) {
	var key = e.keyCode || e.which;
	console.log(Keyboard.getNameOfKey(key));
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
	static getNameOfKey(key){
		var keyName = String.fromCharCode(key);
	
		console.log('Code: ' + key);
		if(Keyboard.keyboardMap[key]) {
			keyName = Keyboard.keyboardMap[key];
		}
		return keyName;
	}
	static getKeyState(e) {
		return Keyboard.key[e];
	}
}
Keyboard.keyboardMap[9] = 'Tab';
Keyboard.keyboardMap[13] = 'Enter';
Keyboard.keyboardMap[16] = 'Shift';
Keyboard.keyboardMap[17] = 'Ctrl';
Keyboard.keyboardMap[18] = 'Alt';
Keyboard.keyboardMap[20] = 'Caps';
Keyboard.keyboardMap[32] = 'Space';
Keyboard.keyboardMap[37] = 'Left Arrow';
Keyboard.keyboardMap[38] = 'Up Arrow';
Keyboard.keyboardMap[39] = 'Right Arrow';
Keyboard.keyboardMap[40] = 'Down Arrow';
Keyboard.keyboardMap[91] = 'Os Key';
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
*/

/*
Author: Fabian Krupinski
Created at: 13.02.2020 09:27 
Updated: Alex Sinkus
Finished at: 25.03.2021
*/
