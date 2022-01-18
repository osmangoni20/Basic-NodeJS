const EventEmit = require('events');

class School extends EventEmit {
    startPeriod() {
        console.log('Class Start');

        setTimeout(() => {
            this.emit('ballRaise', {
                period: 'first',
                text: 'Period Exit',
            });
        }, 2000);
    }
}
module.exports = School;
