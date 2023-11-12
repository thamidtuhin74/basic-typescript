{
    // nullable type | unknown Type | Never


    // -------------nullable type------------
    const searchName = (value : string | null) => {
        if(value){
            console.log("Searching");
        } 
        else{
            console.log("There is nothing to search");
        }
    }
    searchName(null);

    //-------unknown Type ---------
    // A number that we don't know right now but we will know in the runtime. In this situation we will use unknown typeof

    const getSpeedINMeterPerSec = (value: unknown) => {
        if(typeof value === "number"){
            const calculatedSpeed = (value * 1000)/3600;
            console.log(`The speed is ${calculatedSpeed} ms^-1`) 
        }
        else if(typeof value === "string"){
            const [speed , unit] = value.split(' ')
            // console.log(speed , unit);
            const calculatedSpeed = (parseFloat(speed) * 1000)/3600;
            console.log(`The speed is ${calculatedSpeed} ms^-1`) 
        }
        else{
            console.log("wrong Input");
        }
    }

    // getSpeedINMeterPerSec(100);
    getSpeedINMeterPerSec("1000 kmph");


    // -------------Never Type -----------
    // The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. 


    // const throwError = (sms:string):never => {
    //     throw new Error(sms);
    // }
    // throwError("Error SMS from the Never type");









}