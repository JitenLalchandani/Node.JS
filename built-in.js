const os=require('os')
//User Info:
const user = os.userInfo()
console.log(user);
//System Uptime in seconds:
console.log(`The system uptime is: ${os.uptime()} seconds`)
//OS Info:
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);