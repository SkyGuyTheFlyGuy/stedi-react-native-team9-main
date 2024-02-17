import saymyname from "test/utils/hello.mike.js";
import expect from "jest-extended";

it("W06 homework tests", ()=>{
    const name=saymyname();
    console.log(`Hello ${name}!`);

    expect(name).toBe("Mike");
})

