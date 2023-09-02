const os = require('os');

console.log('Операционная система: ', os.platform());
console.log('Архитектура процессора: ', os.arch());
console.log('Информация по процессорам: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Home directory: ', os.homedir());
console.log('System uptaime: ', os.uptime());