const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

test("Can set school via constructor argument", () => {
    const testValue = "SMU";
    const e = new Intern("Bob", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern",
    const e = new Intern("Bob", 3, "SMU");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
    const testValue = "SMU";
    const e = new Intern("Bob", 3, testValue);
    expect(e.getSchool()).toBe(testValue);
});