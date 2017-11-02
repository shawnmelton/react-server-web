class LoggerService {
    constructor() {
        this.output = false
    }

    log(location, message) {
        if (this.output) {
            console.log('%c'+ location +' %c-- ', 'color: rgb(58, 163, 227);', 'color: rgb(210, 210, 210);', message)
        }
    }

    error(location, message) {
        if (this.output) {
            console.log('%c'+ location +' %c-- ', 'color: rgb(58, 163, 227);', 'color: rgb(227, 32, 114));', message)
        }
    }

    setOutput(bool) {
        this.output = bool
    }
}

const logger = new LoggerService()
export default logger