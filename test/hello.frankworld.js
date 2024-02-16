import hello from "../utils/hello.frank.js";

describe('Frank', function() {
it("Should say Frank",()=>{
    const helloString = hello();
    console.log(helloString);
    expect(helloString).toBe('Frank');
  })
});