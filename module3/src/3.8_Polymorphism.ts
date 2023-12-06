{
    // 3.8_Polymorphism.ts --> Bohurupi
    console.log(`-----------------Learnig PolyMorphysm----------------`)

    class Person {
        getSleep(){
            console.log(`I'm sleetping 8hr per day`);
        }
    }
    class Student extends Person{
        getSleep(): void {
            console.log(`I'm sleetping 7hr per day`);
        }
    }
    class Developer extends Person{
        getSleep(): void {
            console.log(`I'm sleetping 6hr per day`);
        }
    }

    const getSleepingHour = (params : Person) =>{
        params.getSleep();
    }

    const person1 = new Person();
    const std1 = new Student();
    const dev1 = new Developer();

    getSleepingHour(person1);
    getSleepingHour(std1);
    getSleepingHour(dev1);


}