{

    // interface | type alias vs interface
    // interface -> in Object Preferable;
    
    // type Alias -> Array, Function , Primitive, as well as Object also

    type User1 = { //declearing type alias --> using for the primitive  and nonPrimitive data type 
        name : string;
        age : number;
    }
    type UserWithROle1 = User1 & {role: string};// extend object type using intersection(&)
    const newUser1: UserWithROle1 = {
        name: 'tuhin',
        age: 24,
        role: 'Boss'
    }



    interface User2 { //interface --> | interface for the nonPrimitive
        name: string;
        age: number;
    }
    interface UserWithRole2 extends User2{// extend object type using extemd
        role: string;
    } 
    const newUser2: UserWithRole2 = {
        name: 'tuhin',
        age: 24,
        role: 'Boss'
    }

    const user1: User1 ={
        name:'Tuhin',
        age:24
    }

    //array using interface

    type Roll_Decleare_using_TypeAlias = number[]; //type alias
    interface Roll_Decleare_using_Interface{//interface
        [index : number] : number
    } 

    const rollNumber1 : Roll_Decleare_using_TypeAlias = [1,2,3];

    // function using type alias 
    type Add1 = (num1: number, num2: number)=> number;
    const sum1: Add1 = (num1,num2)=> num1+ num2;

    interface AddUsingInterface {
        (num1:number,num2:number) : number
    }
    const sum:AddUsingInterface = (num1,num2)=> num1+ num2;


}