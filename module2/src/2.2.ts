{

    // interface | type alias vs interface


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



}