import SoundCommon from './sound-common';

class Sound extends SoundCommon {
  constructor(path_arg) {
    super(path_arg);

    this._url = NSURL.fileURLWithPath(this._path);
    this._player = AVAudioPlayer.alloc().initWithContentsOfURLError(this._url);
    this._player.prepareToPlay();
  }

  play() {
    this._player.play();
  };

  stop() {
    this._player.stop();
  };

  reset() {
    this._player.stop();
    this._player.prepareToPlay();
    this._player.currentTime = 0;
  };
};

const create = (path) => {
  return new Sound(path);
};

export {
  create,
};