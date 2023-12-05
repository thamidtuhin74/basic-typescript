{
    //class

    class Animal {
        // name : string;
        // species : string;
        // sound : string;

        // constructor(name: string, species: string, sound: string){
        //     this.name = name;
        //     this.species = species;
        //     this.sound = sound;
        // }
        constructor(public name: string, public species: string, public sound: string){
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const cat =  new Animal("Mini","Cat","Mew , Mew ...");
    cat.makeSound()

    class Human {
        constructor(public name: string,public gender:string,public eat: string[]){
        }
        maleOrFemale(){
            console.log(`${this.name} is a ${this.gender}`);
        }
        Food(){
            console.log(`${this.name} is a ${this.eat}`);
            this.eat.map(x=>console.log(`I love to eat ${x}`))
        }
    }
    const Bangladeshi = new Human("Tuhin","Male",["biriani","Beef","chicken"]);
    Bangladeshi.maleOrFemale()
    Bangladeshi.Food()



}