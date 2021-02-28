const Manager = require("../lib/Manager");

describe("Manager", () =>{
    it("Able to add office number to the object", () =>{
        const testvalue = "3055618585";
        const e = new Manager("Guillerm", "12345", "test@mail.com", testvalue);
        expect(e.officeNumber).toBe(testvalue);
    })
})

describe("getRole", () =>{
    it("Function able to retrieve role from object", () =>{
        const testvalue = "Manager";
        const e = new Manager("Guillerm", "12345", "test@mail.com", testvalue);
        expect(e.getRole()).toBe(testvalue);
    })
})