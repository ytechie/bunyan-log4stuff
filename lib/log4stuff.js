var http = require('http');

var BunyardLog4Stuff = function(appId){
    //a little helper to make the time more pretty
    Number.prototype.pad = function (len) {
        return (new Array(len+1).join("0") + this).slice(-len);
    };

    return {
        write: function(obj, encoding) {

            var levelFromNumber = {
                '10': 'trace',
                '20': 'debug',
                '30': 'info',
                '40': 'warn',
                '50': 'error',
                '60': 'fatal'
            };

            var meta = {};
            meta["log4net:HostName"] = obj.hostname;

            var now = new Date();
            var dateStr = now.getFullYear() + "-"
                + (1 + now.getMonth()) + "-"
                + now.getDate() + " "
                + now.getHours().pad(2) + ":"
                + now.getMinutes().pad(2) + ":"
                + now.getSeconds().pad(2);


            var logEvent = {
                "Logger": "bunyan",
                "Thread": "",
                "Timestamp": dateStr,
                "Level": levelFromNumber[obj.level],
                "Message": obj.msg,
                "Metadata": meta
            };

            var json = JSON.stringify(logEvent);
            var encoded = escape(json);
            var url = "http://log4stuff.com/app/" + appId + "?logEvent=" + encoded;

            var request = http.get(url, function(res) {
                if(res.statusCode == 200) {
                    //do nothing
                } else {
                    //Remote server error
                };
            }).on('error', function(err) {
                //without listing to this event an ECONNRESET error is thrown
            });
            request.shouldKeepAlive = false;
        }
    };
};

module.exports = BunyardLog4Stuff;