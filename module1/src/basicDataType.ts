{


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

    // ---------------- 1.6 -------------------
    // function  --> normal function & Arrow function

    function add(num1: number, num2: number):number{
        return num1 + num2
    }
    add(5,6);
    //add default value in number | num2: number = 10
    function add2(num1: number, num2: number = 10):number{
        return num1 + num2
    }

    const addArrow = (num1: number , num2: number):number => num1 + num2;
    

    //Method --> function in a Object

    const poorUser = {
        name : 'tuhin',
        balance : 0,
        //In object ''Normal Function' should use cz '.this' only work with normal function. In Arrow function '.this' is not working
        addBalance(balance : number):number {//annonomious normal function --> method
            return this.balance + balance;
        }
    }

// map in array using function
    const arr : number[] = [1,4,3,5];
    const newArray : number[] = arr.map((elem : number) : number => elem * elem)
// -------------module 1.7------------------
//Spread operator


}