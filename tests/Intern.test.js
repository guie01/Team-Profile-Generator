const Intern = require("../lib/Intern");

describe("Intern", () =>{
    it("Able to add school to the object", () =>{
        const testvalue = "UCF";
        const e = new Intern("Guillerm", "12345", "test@mail.com", testvalue);
        expect(e.school).toBe(testvalue);
    })
})

describe("getSchool", () =>{
    it("Function able to retrieve school from object", () =>{
        const testvalue = "UCF";
        const e = new Intern("Guillerm", "12345", "test@mail.com", testvalue);
        expect(e.getSchool()).toBe(testvalue);
    })
})

describe("getRole", () =>{
    it("Function able to retrieve role from object", () =>{
        const testvalue = "Intern";
        const e = new Intern("Guillerm", "12345", "test@mail.com", "UCF", testvalue);
        expect(e.getRole()).toBe(testvalue);
    })
})