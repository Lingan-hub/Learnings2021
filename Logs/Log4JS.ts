const logs=require('log4js');
logs.configure('./Logs/Log4js.json');

exports.file = logs.getLogger('file');