var fs = require("fs");
var cp = require("child_process");

var filenamesMap = {
    _map_: {},
    length: 0,
    put: function (name) {
        this._map_[name] = 1;
        this.length++;
        return this;
    },
    remove: function (name) {
        delete this._map_[name];
        this.length--;
        return this;
    }
};

// RegExpressions
var 
    r_file,
    r_extension = /\.(.*)+/;

process.on("message", function (m) {
    var path;
    process.chdir(m.cfg.appdir);
    path = {
        from: filterPath(m.package.from),
        to: filterPath(m.package.to)
    };
    r_file = new RegExp(path.from.file.replace(".", "[\\.]").replace("*", "(.*)+") + "$", "i");
    fs.readdir(path.from.folder, function (err, files) {
        sendSoyToJS(files, path);
    });
});


function logs(msg) {
    var dateNOW = new Date();
    var content = dateNOW.getHours() + "：" + dateNOW.getMinutes() + ":" + msg;
    var LOGName = dateNOW.getFullYear() + dateNOW.getMonth() + dateNOW.getDate();
    fs.writeFileSync("scripts/build/logs/" + LOGName + ".log", content, "utf8");
}

function filterPath(path) {
    if (!path)
        return;
    var rtxt = /\{.+\}/.exec(path);
    return {
        folder: path.slice(0, -rtxt[0].length),
        file: rtxt[0].slice(1, -1)
    }
}

function generatePath(format, name) {
    if (!format || !name) return;
    return format.folder + format.file.replace("*", name);
}

function sendSoyToJS(files, path) {
    if (!files)
        return console.log("没有对files进行初始化");
    sendSoyToJS = function () {
        var file = files.shift();
        if (file) {
            var m_file = file.match(r_file);
            if (m_file ? m_file = m_file[0] : false) {

                var filename = m_file.slice(0, -m_file.match(r_extension)[0].length);
                var from = generatePath(path.from, filename);
                var to = generatePath(path.to, filename);
                var command = "java -jar scripts/build/third/soyToJS.jar --outputPathFormat " + to + " " + from;

                filenamesMap.put(filename);
                cp.exec(command, function (error, stdout, stderr) {
                    process.send("[200][" + filename + " Success!]");
                    filenamesMap.remove(filename);
                    if (filenamesMap.length === 0) {
                        process.exit(0);
                    }
                });
            }
            sendSoyToJS();
        };
    }
    sendSoyToJS();
}