const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

test("Can set school via constructor argument", () => {
    const testValue = "SMU";
    const e = new Intern("Ryan Howard", 3, "rhoward@dunder-mifflin.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern",
    const e = new Intern("Ryan Howard", 3, "rhoward@dunder-mifflin.com", "SMU");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
    const testValue = "SMU";
    const e = new Intern("Ryan Howard", 3, "rhoward@dunder-mifflin.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});