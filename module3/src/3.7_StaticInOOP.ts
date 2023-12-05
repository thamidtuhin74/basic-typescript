{
    // 3.7_StaticInOOP.ts 
    // static --> Memory Change hoy na
    // static property & function

    class Counter {
        static count : number = 0;

        static increment(){
            return(++Counter.count)
        }
        static dicrement(){
            return(--Counter.count)
        }
    }

    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.dicrement());
    console.log(Counter.dicrement());
    



}