import * as fs from 'tns-core-modules/file-system';

class Sound {
    constructor(path_arg){
        let path = typeof path_arg === typeof "string" ? path_arg.trim() : '';

        if (path.indexOf("~/") === 0) {
            path = fs.path.join(fs.knownFolders.currentApp().path, path.replace("~/", ""));
        }

        if (!fs.File.exists(path)) {
            console.error("Sound not initialized; file not found.");
            return;
        }

        this._path = path;
    }
};

export default Sound;