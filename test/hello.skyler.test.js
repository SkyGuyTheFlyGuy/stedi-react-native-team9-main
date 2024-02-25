import hello from "../utils/hello.helloworldskyler.js";

it("Should say Skyler",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Skyler");
})