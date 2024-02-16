import sayHello from "../utils/helloworldskyler.mjs";
import assert from 'assert';

it("Hello World", ()=>{
    const hello = sayHello();
    assert.equal(hello, "Hello");
});