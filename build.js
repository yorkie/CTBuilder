var 
// modules to require
    cp = require("child_process"),
    fs = require("fs");

// get build.json
fs.readFile("build.json", "utf8", function (err, data) {
    // configuration
    var buildCfg = JSON.parse(data.replace(/(\r|\n|\t|\s)/gi, ""));
    var buildList = buildCfg.buildPathList;
    sendToHandler(buildCfg);
});

function sendToHandler(cfg, list) {
    if (!(cfg && (list = cfg.buildPathList)))
        throw "没有对list进行初始化设置";
    sendToHandler = function () {
        var build_package = list.shift();
        if (build_package) {
            // new process for current cfg
            var child = cp.fork("handler");
            child.send({
                package: build_package,
                cfg: cfg
            });
            child.on("message", function (m) {
                console.log(m);
                sendToHandler();
            });
        }
        return false;
    }
    sendToHandler();
}