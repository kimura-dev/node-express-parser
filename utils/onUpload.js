const { EventEmitter } = require('events')
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('onUpload', function onUpload(){
    console.log('===============================')
    console.log('File upload event triggered')
})

emitter.emit('unUpload')