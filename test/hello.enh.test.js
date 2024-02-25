import hello from "../utils/hello.enh.js";

it("Should say Erick",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Erick");
})