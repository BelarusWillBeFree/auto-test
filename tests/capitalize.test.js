import {capitalize} from '../src/capitalize.js'

const startTest = () =>{
if (capitalize('') !== '') {
    throw new Error('функция работает не верно');
}

if (capitalize('hello') !== 'Hello') {
    throw new Error('функция работает не верно');
}
console.log('all tests finished!');
};

startTest();
