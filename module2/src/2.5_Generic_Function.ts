{
    // normal Function
    const createArray = (param : string ) : string[]=>{
        return [param]
    }
    const res1 = createArray('Bangladesh');


    // Generic_Function --> Create A Array

    
    const createArrayGeneric = <T>(param: T):T[] =>{
        return [param]
    }
    const resGeneric = createArrayGeneric<string>('Bangladesh')
    const resGenericBoolean =  createArrayGeneric<boolean>(true);
    interface User {
        id: number;
        name: string
    };
    const resGenericObj =  createArrayGeneric<User>({id: 2301, name: 'Tuhin'});

   
   
   
   
    // Generic Function --> Create A Touple

    const createGeneicTouple = <T , Q> (param1: T , Param2: Q) :[T,Q]=>{
        return [param1, Param2];
    }

    const stringNumberTouple =  createGeneicTouple<string , number>('Bangladesh',1971);
    const stringObjectTouple = createGeneicTouple< string , {name:string, age: number}>('My name & age are : ',{name: 'tuhin',age: 24});

    //another example

    const addCourseToStudent = <T>(student : T) =>{
        const course:string = 'Next Level Developer';
        return {
            ...student,course
        }
    }
    const std1 = addCourseToStudent<{name:string,email:string,title:string}>({name:'Tuhin',email: 'thamidtuhin74@gmail.com', title: 'FrontendDeveloper'})

}