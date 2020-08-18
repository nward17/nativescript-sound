import SoundCommon from './sound-common';

class Sound extends SoundCommon {
  constructor(path_arg, options) {
    super(path_arg);

    this._url = NSURL.fileURLWithPath(this._path);
    this._player = AVAudioPlayer.alloc().initWithContentsOfURLError(this._url);
    this._player.prepareToPlay();
  }

  play() {
    this._player.play();
  }

  stop() {
    this._player.stop();
  }

  reset() {
    this._player.stop();
    this._player.prepareToPlay();
    this._player.currentTime = 0;
  }
}

function isBoolean(qBool) {
  return typeof qBool === typeof true;
}

const setBackground = (background) => {
  if (!isBoolean(background)) {
    return;
  }

  let cat;

  if (background) {
    cat = AVAudioSessionCategoryAmbient;
  } else {
    cat = AVAudioSessionCategoryPlayback;
  }

  const audioSession = AVAudioSession.sharedInstance();
  audioSession.setCategoryError(cat, null);
};

const create = (path) => {
  const s = new Sound(path);

  return s;
};

export {
  create,
  setBackground,
};