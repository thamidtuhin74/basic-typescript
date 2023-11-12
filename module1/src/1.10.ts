{
    // Union & Intersection
    
    // ------- Union -> Like as Logical OR(||) operation ---------

    // N:B: The string literal type allows you to specify a set of possible string values for a variable, only those string values can be assigned to a variable.
    //string literal types 👇(FrontENdDeveloper)
    type FrontENdDeveloper = 'Copy Paste Developer' | 'Junior Developer';

    type FullStactDeveloper = 'Frontend Developer' | 'Backend Developer';

    type Developer = FrontENdDeveloper | FullStactDeveloper;

    
    const newDeveloper : FrontENdDeveloper = 'Junior Developer';


    type User = {
        name : string;
        age : number;
        address : string;
        contactNo : string;
        gender : "male" | "Female"; 
        bloodGroup : "O+"|"A+"|"B+"|"AB+";
        email? : string;
    }

    const user1: User = {
        name : 'tuhin',
        age : 24,
        address : "Ghana",
        contactNo : "01798908900",
        gender : "male",
        bloodGroup : "B+",
        email : "tuhin@gmail.com"


    }

    // ------- Intersection -> Like as Logical AND (&&) operation ---------

    type FrontEndDeveloper = {
        skills : string[];
        designation1 : "Frontend Developer"
    }
    type BackEndDeveloper = {
        skills : string[];
        designation2 : "Backend Developer"
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const fullStackDeveloper : FullStackDeveloper ={
        skills : ["HTML", "CSS" , "JS" , "nodeJS" , "ExpressJS" , "MongoDB" ,"React" ],
        designation1 : "Frontend Developer",
        designation2 : "Backend Developer"
    }

 







}