const Engineer = require("../lib/Engineer");

describe("Engineer", () =>{
    it("Can add GitHub to the object", ()=>{
        const testvalue = "SampleGitHub";
        const e = new Engineer("GUillermo", "12345", "test@email.com", testvalue)
        expect(e.github).toBe(testvalue);
    })
})

describe("getRole()", () =>{
    const testvalue = "Engineer";
    const e = new Engineer("GUillermo", "12345", "test@email.com", "SampleGithub", testvalue)
    expect(e.getRole()).toBe(testvalue)
})
