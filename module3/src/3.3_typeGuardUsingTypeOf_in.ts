{
    // type guards -> typeof and in

    // typeof--> works in run time like as js

    const add = (param1: string | number , param2: string | number): string | number =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    }

    console.log(add(1,6)); //7
    console.log(add(1,"6")); //16



    //in guard
    type NormalUser = {
        name : string;
    }
    type AdminUser = {
        name : string;
        role : "admin";
    }

    const getUser = (user : NormalUser | AdminUser) =>{
        if('role' in user){
            console.log(`My name is ${user.name} & my role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name} & I don't have any role`)
        }
    }

    const normalUser1 : NormalUser = {name: "Mr Tuhin"}
    const adminUser1 : AdminUser = {name: "Mr Admin", role: "admin"}


    // getUser(normalUser1); //My name is Mr Tuhin & I don't have any role
    getUser(adminUser1); //My name is Mr Admin & my role is admin



}