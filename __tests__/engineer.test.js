const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

test("Can set GitHub username via constructor argument", () => {
    const testValue = "dks1725";
    const e = new Engineer("Dwight Schrute", 2, "dschrute@dunder-mifflin.com", testValue);
    expect(e.GitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Dwight Schrute", 2, "dschrute@dunder-mifflin.com", "dks1725");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username from getGithub()", () => {
    const testValue = "dks1725";
    const e = new Engineer("Dwight Schrute", 2, "dschrute@dunder-mifflin.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});