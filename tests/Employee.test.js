const Employee = require("../lib/Employee");

//OBJECT TEST 
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
});

describe("getName()", () =>{
    it("The funciton is able to retrieve the name from the object", ()=>{
        const testvalue = "Guillermo";
        const e = new Employee(testvalue);
        expect(e.getName()).toBe(testvalue);
    })
});

describe("getId()", () =>{
    it("The funciton is able to retrieve the ID from the object", ()=>{
        const testvalue = "12345";
        const e = new Employee("Guillermo",testvalue);
        expect(e.getId()).toBe(testvalue);
    })
})

describe("getEmail()", () =>{
    it("The funciton is able to retrieve the email from the object", ()=>{
        const testvalue = "test@gmail.com";
        const e = new Employee("Guillermo","12345", testvalue);
        expect(e.getEmail()).toBe(testvalue);
    })
})

describe("getRole()", () =>{
    it("The funciton is able to retrieve the role from the object", ()=>{
        const testvalue = "Employee";
        const e = new Employee("Guillermo","12345", "test@gmail.com");
        expect(e.getRole()).toBe(testvalue);
    })
})