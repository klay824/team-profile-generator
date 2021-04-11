const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, school) {
        this.id = id;
        this.school = school;
    }

    getSchool() {
        return `School: ${this.school}`;
    }

    getRole() {
        return `Intern`;
    }
}