var Bunyan = require('bunyan');
var BunyardLog4Stuff = require('./log4Stuff.js');
var bunyardLog4Stuff = new BunyardLog4Stuff("bunyan_example");

var Logger = Bunyan.createLogger({
    name: 'someName',
    streams: [
        {
            level: 'info',
            type: "raw",
            stream: bunyardLog4Stuff
        }
    ],
    serializers: {
        err: Bunyan.stdSerializers.err,
        req: Bunyan.stdSerializers.req,
        res: Bunyan.stdSerializers.res,
    }
});

Logger.info("Hello from Bunyan");