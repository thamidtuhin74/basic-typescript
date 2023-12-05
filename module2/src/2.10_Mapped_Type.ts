{
    // Mapped Type -> its working like as Map in JS |  when we need to change the type of a any variable/object etc then we can use 'Mapped Type'

    // example 1
    const NumberArray = [2,4,6];// it need to a string array
    //then we can do it using Map 
    const StringArray = NumberArray.map(number=> number.toString());
    console.log(StringArray);

    // example 1 : AreaNumber is a type with height & width.
    type AreaNumber = {
        height : number;
        width : number;
    }//but we need height& width in string from.
    // Then we will use Map Type
    
    type height = AreaNumber["height"];//called look up type


    //Map Type
    type AreaString = {
        [key in keyof AreaNumber] : string;
    }

    //Map Type with GENERIC TYPE -> when we want felexibility & want exactly same type that we geven

    type Area <T> ={
        [key in keyof T ]: T[key] //using look up type
    }
    const Area1: Area<{height : string ; width: number}> = {
        height : "100",
        width : 50
    }




    
}