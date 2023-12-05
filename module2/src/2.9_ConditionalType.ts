{
    //Condition Type in typeScript

    type a1 =  null;
    type b1 = string;

    type x = a1 extends number ? true : false; //Condition Type

    type y = a1 extends number ? number : b1 extends string ? string : any; //Condition Type


    type VehicleOfTuhin = {
        bike: string;
        car : string;
        ship : string;
        plane : string
    }

    // keyOf --> give us a literal of Union function
    
    type CheckVehicle<T> = T extends keyof VehicleOfTuhin ? true : false;//consitional type using generic Type

    type HasCar = CheckVehicle<'tractor'>

}