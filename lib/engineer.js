const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, GitHub) {
        this.id = id;
        this.GitHub = GitHub;
    }

    getGithub() {
        return `GitHub: ${this.GitHub}`;
    }
    
    getRole() {
        return `Engineer`;
    }
}