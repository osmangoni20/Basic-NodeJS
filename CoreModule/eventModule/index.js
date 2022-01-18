const School = require('./school');
// const school = new School();
// ballRaise event listener register

const school = new School();
school.on('ballRaise', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();
