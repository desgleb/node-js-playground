const EventEmitter = require('events');

// const emitter = new EventEmitter();
//
// emitter.on('Anything', (data) => {
//     console.log('ON: Anything', data);
// });
//
// emitter.emit('Anything', {a: 1});
// emitter.emit('Anything', {b: 2});
//
// setTimeout(() => {
//     emitter.emit('Anything', {c: 3})
// }, 1500);

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe on...]');
        this.on(eventName, cb);
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();

dis.subscribe('aa', data => {
    console.log('ON: aa', data);
})

dis.dispatch('aa', {aa: 22});