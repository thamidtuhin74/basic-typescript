{
    // generic type with type alias
   
    // ----------IN Array---------

    // type GerericArray<params> = Array<params>; 
    type GerericArray<T> = Array<T>; //industry Standard

    const rollNumber: GerericArray<number> = [5,2,1,3];
    const students: GerericArray<string> = ['x','y','z','p'];
    const boolArray: GerericArray<boolean>= [true,false,false,true];

    // const users: GerericArray<object> =[
    const users: GerericArray<{name: string; age: number}> =[
        {
            name: 'tuhin',
            age: 100
        },
        {
            name: 'maruf',
            age: 110
        },
        {
            name: 'shawon',
            age: 120
        }
    ]


    // ----------Generic Tuple---------

    type GenericTuple<X,Y> = [X , Y];
    const Couple: GenericTuple<string, string> = ['Mr. X','Mrs. Y'];
    const userWithID: GenericTuple<number, {name:string,password:string}> = [147482 , {name: 'tuhin',password: 'tuhin1234'}]

}