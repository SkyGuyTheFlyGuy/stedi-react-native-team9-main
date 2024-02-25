import hello from "../utils/hello.mike.js";

it("Should say Mike",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Mike");
})