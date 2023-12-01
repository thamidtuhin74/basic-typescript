// Type alias (using for the primitive  and nonPrimitive data type | interface for the nonPrimitive)
{
// ------------ Type Alias For Object---------
    type student = {
        id : number;
        name : string;
        gender : string;
        contactNo? : string;
        address : string;
    }

    // const student1 : {
    //     id : number;
    //     name : string;
    //     gender : string;
    //     contactNo : string;
    //     address : string;
    // } = {
    const student1 : student = {
        id : 101,
        name : "Tuhin",
        gender : "male",
        contactNo : "01798908909",
        address : "Ghana"
    }

    // const student2 : {
    //     id : number;
    //     name : string;
    //     gender : string;
    //     contactNo : string;
    //     address : string;
    // } = {
    const student2 : student={
        id : 102,
        name : "Maruf",
        gender : "male",
        contactNo : "01798908909",
        address : "Ghana"
    }

    // const student3 : {
    //     id : number;
    //     name : string;
    //     gender : string;
    //     contactNo : string;
    //     address : string;
    // } = {
    const student3 : student ={
        id : 103,
        name : "Shawon",
        gender : "male",
        contactNo : "01798908909",
        address : "Ghana"
    }




// ------------ Type Alias For String---------

     type UserName = string;
     type IsAdmin = boolean;
     const userName : UserName = 'tuhin'
     const isAdmin : IsAdmin = true;


// ------------ Type Alias For Function---------

    // declear a type 👇
    
    type Add = (num1: number , num2: number) => number;

    // const add = (num1: number , num2: number) =>{
    //     num1 + num2;
    // }

    const add: Add = (num1 , num2) => num1 + num2;
        


}