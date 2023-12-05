{
    //utility types in ts -> Pick | Omit | Required | Partial| Readonly | Record

    //Pick | Omit | Required | Partial| Readonly | Record

    type person = {
        name : string;
        age : number;
        email? : string;
        contactNo : string; 
    }
    //Pick
    type nameAge = Pick<person, "name" | "age">
    // Omit
    type contactInfo = Omit<person, "name"| "age">
    // Required
    type newUserRequired = Required<person>
    // Partial
    type newUserPartial = Partial<person>
    // Readonly
    type personReadOnly = Readonly<person>
    
    const person1: personReadOnly = {
        name : "Tuhin",
        age : 24,
        contactNo : "017...",
    }
    // person1.name = "Md. Tuhin"; //can't exit because person1 is ReadOnly Object


    //Record

    type MyObj = Record<string, string>

    const obj1:MyObj = {
        a : "aa",
        b : "bb",
        c : "cc",
        d : "dd"
    }

    const EmptyObj : Record<string, string> = {}//very Important


}