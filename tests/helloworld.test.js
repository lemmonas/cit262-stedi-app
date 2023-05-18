import helloWorld from '../utils/helloworld.js';
import assert from 'assert';

it ("Should say hello", ()=>{
    const hi = helloWorld();
    // console.log(helloWorld());
    assert.equal(hi,"Hello");
});