bunyan-log4stuff
=================

A [Bunyan](https://github.com/trentm/node-bunyan) transport that logs to [Log4Stuff](http://log4stuff.com), the real-time log display

## Installation

Coming soon.

## Example

First, open [http://log4stuff.com/app/bunyan_example](http://log4stuff.com/app/bunyan_example)

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

Run the example script, and you'll see the log messages appear on the Log4net website in real-time.

Replace **bunyan_example** with any string, and use that same string in your Log4stuff url:
[http://log4stuff.com/app/**bunyan_example**](http://log4stuff.com/app/bunyan_example)

## Achknoledgements

Special thanks to [akreienbring](https://github.com/akreienbring) for kicking off this project and supplying the [initial code](https://github.com/ytechie/winston-log4stuff/issues/1#issuecomment-72885316).