{

    // type assertion
    // ami developer hisabe compiler er theke valo type bujhle hbe "type assertion"


    let anything : any;

    anything = "Assertion of type script";

    anything = 786;

    // (anything as number).//type assertion

    const kgTOGM =  (value: string | number)=>{
        if(typeof value === 'string'){
            const valueNum = parseFloat(value);
            return `Converted Kg to Gram = ${valueNum*1000}`;
        }
        if(typeof value === 'number'){
            return value*1000;
        }
    }

    //NOW kgTOGM function can return 3types of data- sting , number & undefine
    // But web can control it when we are 100% sure that the function will return a number then we can change the number using 'as'--> typer assertion
    const test1 = kgTOGM(1000);
    const test2 = kgTOGM('2000') as string;// type assertion

}