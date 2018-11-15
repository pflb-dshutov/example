import { createLogger, transports } from 'winston'
import { format } from 'logform'

export class LoggerExample{
    static loggerDetails = createLogger({
        level: "info",
        format: format.simple(),
        transports: [
            new transports.Console,
            new transports.File({ filename: 'error.log', level: 'error' }),
            new transports.File({ filename: 'combined.log' })
        ]
    });
}