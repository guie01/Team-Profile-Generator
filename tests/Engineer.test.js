const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
    it("Can add GitHub to the object", ()=>{
        const testvalue = "SampleGitHub";
        const e = new Engineer("GUillermo", "12345", "test@email.com", testvalue)
        expect(e.github).toBe(testvalue);
    })
})

describe("getGithub()", () =>{
    it("Function is able to retrieve github account from object", () => {
    const testvalue = "SampleGitHub";
    const e = new Engineer("GUillermo", "12345", "test@email.com", testvalue)
    expect(e.getGithub()).toBe(testvalue)
    })
})

describe("getRole()", () =>{
    it("Function is able to retrieve role from object", () => {
    const testvalue = "Engineer";
    const e = new Engineer("GUillermo", "12345", "test@email.com", "SampleGitHub", testvalue)
    expect(e.getRole()).toBe(testvalue)
    })
})
