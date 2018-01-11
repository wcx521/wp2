
require('./chunk1');

function chunk2(){
    console.log('i use the chunk1 one time...');
}

exports.chunk2 = chunk2;

