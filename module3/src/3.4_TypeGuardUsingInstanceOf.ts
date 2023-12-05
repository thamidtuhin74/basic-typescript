{
    //  instanceof guard

    class Animal{
        constructor(public name: string,public species: string ,public sound:string){}
        makeSound(){
            console.log("I'm making Sound");
        }
    }

    //DOG
    class Dog extends Animal {
        constructor(name:string, species:string,sound:string){
            super(name,species,sound)
        }
        makeBark(){
            console.log(`I'm Barking`)
        }
    }
    const dog = new Dog("Tomy","Dog","ghew ghew");

    //CAT
    class Cat extends Animal {
        constructor(name:string, species:string,sound:string){
            super(name,species,sound)
        }
        makeMaw(){
            console.log(`I'm Mew Mew`)
        }
    }

    const cat = new Cat("Mini","Cat","Mew Mew");

    //RAT
    class Rat extends Animal {
        constructor(name:string, species:string,sound:string){
            super(name,species,sound)
        }
    }
    const rat = new Rat("Ciku","Rat","Chik chik");

    // const getAnimal = (animal : Animal)=>{
    //     if(animal instanceof Dog){
    //         animal.makeBark();
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMaw();
    //     }
    //     else{
    //         animal.makeSound()
    //     }

    // }

    // Smart Way 

    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog
    } 
    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat
    } 

    const getAnimal = (animal : Animal)=>{
        if(isDog(animal)){
            animal.makeBark();
        }
        else if(isCat(animal)){
            animal.makeMaw();
        }
        else{
            animal.makeSound()
        }

    }


    getAnimal(cat);
    
}