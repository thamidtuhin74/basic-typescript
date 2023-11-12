{
    // use of ?
    //ternary operator || optional chaining || nullish coalescing operator, 

    // --------ternary operator---------
    const age :  number = 15;

    if(age >= 18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }

    const isAdult = age >= 18 ? "Adult Person" : "Not a Adult Person"
    console.log(isAdult);

    //----------nullish coalescing operator ------------

    // READ : The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    // Syntax -> leftExpr ?? rightExpr

    const isAuthenticated  = undefined;

    const nullishResult = isAuthenticated ?? "Guest"
    console.log({nullishResult})

    // NB: nullish coalescing operator & ternary operator is not same!


    // -----------optional chaining-----------

    type User = {
        name : string;
        age : number;
        presentAddress : string;
        contactNo : string;
        gender : "male" | "Female"; 
        bloodGroup : "O+"|"A+"|"B+"|"AB+";
        email? : string;
    }

    const user1: User = {
        name : 'tuhin',
        age : 24,
        presentAddress : "Ghana",
        contactNo : "01798908900",
        gender : "male",
        bloodGroup : "B+",
        email : "tuhin@gmail.com"
    }
    const parmanentAddrees = user1.parmanentAddress??"No Parmanent Address is Available";

    console.log(parmanentAddrees);


}