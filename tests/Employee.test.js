const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Create a new object", () =>{
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("Able to add a name to the object", () =>{
        const name = "Guillermo";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("Able to add a name to the object", () =>{
        const name = "Guillermo";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("Able to add a id to the object", () =>{
        const testvalue = "12345";
        const e = new Employee("Guillermo", testvalue);
        expect(e.id).toBe(testvalue);
    });
    it("Able to add a email to the object", () =>{
        const testvalue = "test@gmail.com";
        const e = new Employee("Guillermo", "12345", testvalue);
        expect(e.email).toBe(testvalue);
    });
})
