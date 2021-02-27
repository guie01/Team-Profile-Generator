const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Create a new object", () =>{
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    })
})