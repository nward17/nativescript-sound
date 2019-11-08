# NativeScript Sound

Play a sound in your NativeScript app.

This project was originally programmed by John Bristowe. However when this plugin is used in a project installed on a phone with iOS 13.2, the entire application would crash. This fork is a modified version of the original project that solves the instantiation crash issue that I encountered. The rest of the project remained intact.

## Installation

Run the following command from the root of your project:

```
npm i nativescript-sound-kak
```

## Usage

To use this plugin you must first require() it:

```js
var sound = require("nativescript-sound");
```

### create and play

It's important to preload the audio file into the **sound** module before playing it; there is a delay during creation due to the audio being processed:

```js
var tada = sound.create("~/sounds/tada.mp3"); // preload the audio file

// play the sound (i.e. tap event handler)
tada.play();
```

A good way to do this is to create a sound collection:

```js
sounds = {
	"Tada": sound.create("~/sounds/tada.mp3"),
	"Boo": sound.create("~/sounds/boo.mp3"),
	// ...
};
```

If you wish to play a sound due to a button being tapped, leverage the following code (where `name` refers to the name of the audio file to be played):

```js
this.playButtonPressed = function(name) {
	if (app.android) {
		sounds[name].play();
	} else {
		var soundFile = sound.create("~/sounds/" + name + ".mp3");
		soundFile.play();
	}
}
```

### stop

```js
tada.stop();
```

### reset

```js
tada.reset();
```