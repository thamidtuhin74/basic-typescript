{
    // generic type with interface

    interface Developer<T, X = null>{
        name: string;
        computer: {
            brand : string;
            model: string;
            ram: number;
        }
        smartWatch: T;
        bike?: X;
    }


    type LocalWatch= {
        brand : string,
        price : number,
    }

    const poorDeveloper: Developer<LocalWatch> ={
        name : 'Tuhin',
        computer: {
            brand : 'HP',
            model : 'notebook 420',
            ram : 4,
        },
        smartWatch: {
            brand : 'local',
            price : 600,
        }
    }

    interface AppleWatch{
        brand : string,
        Price : number,
        heartPalse : boolean,
        Sleep : boolean,
        stepsCount : boolean,
    }
    interface Yamaha{
        brand: string,
        model: string,
        engine: string,
    }

    const RichDeveloper : Developer<AppleWatch , Yamaha>={
        name : 'X',
        computer : {
            brand : 'Apple',
            model : 'Macbook Pro-12',
            ram : 12,
        },
        smartWatch: {
            brand : 'Apple',
            Price : 5000,
            heartPalse : true,
            Sleep : true,
            stepsCount : true,  
        },
        bike : {
            brand: 'Yamaha',
            model: 'Yamaha fzs v2',
            engine: '150cc',
        }
    }

}