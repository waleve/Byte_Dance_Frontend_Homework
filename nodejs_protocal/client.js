const net = require('net');
const Transcoder = require('./transcoder');
const transcoder = new Transcoder();
const client = net.createConnection({
    host: '127.0.0.1',
    port: 8080
});

client.write(transcoder.encode('0 Nodejs 技术栈'));

const arr = [
    '1 a ',
    '2 b ',
    '3 c ',
    '4 d ',
    '5 e ',
    '6 f ',
    '7 g '
]

setTimeout(function() {
    for (let i=0; i<arr.length; i++) {
        // console.log(arr[i]);

        client.write(transcoder.encode(arr[i]));
    }
}, 1000);


