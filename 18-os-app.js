const os = require('os');

// info about current user 
const user = os.userInfo()
console.log(user);

//Methods returns the system uptime in seconds

console.log(`The Syste Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),   
}

console.log(currentOs)