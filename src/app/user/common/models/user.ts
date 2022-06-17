import { Roles } from './enums/roles.enum';

class User {
    public name: string;
    public role: Roles;

    constructor(data?: User) {
        if (data) {
            Object.assign(this, data);
        }
    }
}

class Employee extends User {
    public empCode: number;

    constructor(data?: Employee) {
        if (data) {
            super(data);
            Object.assign(this, data);
        }
    }

    displayName(): void {
        //console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
        // String Interpolation 
        console.log(`Name = ${this.name}, Employee Code = ${this.empCode}`);
    }
}
