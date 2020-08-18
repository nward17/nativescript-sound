import SoundCommon from './sound-common';

class Sound extends SoundCommon {
  constructor(path_arg) {
    super(path_arg);

    this._player = new android.media.SoundPool(1, android.media.AudioManager.STREAM_MUSIC, 0);
    this._soundId = this._player.load(this._path, 1);
  }

  play() {
    this._player.play(this._soundId, 1.0, 1.0, 1, 0, 1.0);
  }

  stop() {
    this._player.stop(this._soundId);
  }
}

// Doing nothing right now in Android
const setBackground = (background) => {};

const create = (path) => {
  return new Sound(path);
};

export {
  create,
  setBackground,
};