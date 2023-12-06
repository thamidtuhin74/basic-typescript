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



    //------Another Example----------

    class Shape{
        constructor(public name: string){

        }
        getArea(): number{
            return 0;
        }
    }

    class Circle extends Shape{
        constructor(public radius: number) {
           super("Circle"); 
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

    }

    class Rectangle extends Shape{
        constructor(public height: number , public width: number) {
           super("Rectangle"); 
        }
        getArea(): number {
            return this.height * this.width;
        }

    }

    const getShapeArea = (param : Shape) =>{
        console.log(`Area of a ${param.name} is = ${param.getArea()}`);
    }

    const Shape1 = new Shape("Any shape");
    const Circle1 = new Circle(5);
    const Rect1 = new Rectangle(10,6);

    getShapeArea(Shape1);
    getShapeArea(Circle1);
    getShapeArea(Rect1);



}