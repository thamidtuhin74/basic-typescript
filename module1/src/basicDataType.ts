// string
let firstName : string = 'Al Tahmiduzzaman Tuhin';
// number
let roll : number = 114;
// boolean
let isStudent : boolean = false;
// undefine
let x : undefined = undefined;
// null
let y : null = null;

// declare a variable without value

let lastName : string;
// ----------------------------------

// Array

let friends : string[] = ['maruf', 'sawon','shuvo'];

let rollList :number[] = [105,118,103];

// tuple --> An Array maintain order - types of values

let nameAge : [string , number] = ['tuhin', 114];

// -------------module 1.5------------------

// reference type
    // object
    const user: {
        // readonly company : string; // fixed a property value using access modifier
        company : 'Programming Hero'; //type --> literal type
        firstName : string;
        middleName? : string | undefined; //optinal type
        lastName : string;
        isStudent : boolean;
    } = {
        company : 'Programming Hero',
        firstName : 'Habib',
        lastName : 'Shawon',
        isStudent : true
    }