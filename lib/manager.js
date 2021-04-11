const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, officenumber) {
        this.id = id;
        this.officenumber = officenumber;
    }
    getRole() {
        return `Regional Manager`
    }
}

module.exports = Manager;