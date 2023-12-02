{
    //generic constrains with typeof operator

    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship';
    type Owner2 = keyof Vehicle;
    const person1 : Owner = "bike";


    //

    const getPropertyValue = <X,Y extends keyof X > (Obj: X,key: Y)=>{
        return Obj[key];
    }
    const user = {
        name: 'tuhin',
        age: 24,
        address : 'Rangpur',
        title : 'Front ENd Dev'
    }
    const res1 = getPropertyValue(user,'title');
}