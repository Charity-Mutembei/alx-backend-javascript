class Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, yearsOfExperience: number | undefined, location: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;
    }

    addAttribute<K extends string>(name: K, value: any) {
        if (name in this) {
            this[name] = value;
            //[Type 'K' cannot be used to index type 'this'.ts(2536)(parameter) name: K extends string]
        } else {
            console.error(`Property '${name}' does not exist on Teacher.`);
        }
    }
}
interface Teachers {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teachers {
    numberOfReports: number;
}
