{
    //OOP - Inheritance

    class Parent {
        constructor(public name: string, public age: number, public address: string){}
        getSleep(numberOfHour : number){
            console.log(`${this.name} will sleep for ${numberOfHour}`);
        }
    }

    class Student extends Parent{
        constructor( name: string, age: number, address: string){
            super(name,age,address);
        }

        getSleep(numberOfHour : number){
            console.log(`${this.name} will sleep for ${numberOfHour}`);
        }

    }
    const student1 = new Student("Mr. Tuhin",24,"BD");
    student1.getSleep(10);

    class Teacher extends Parent{
        constructor( name: string, age: number, address: string , public designation: string){
            super(name,age,address);
        }

        takeClass(numberOfClass : number){
            console.log(`${this.name} will Take ${numberOfClass} classes`)
        }

    }
    const teacher1 = new Teacher("Mr. Khalid",29,"BD","Lecturer");
    teacher1.takeClass(0);
}