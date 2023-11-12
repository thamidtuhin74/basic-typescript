{

    // Spread operator
    // rest operator
    // destructuring


    //Spread operator */

    const bro1 : string[] = ['x','y','z'];
    const bro2 : string[] = ['a','b','c'];

    bro1.push(...bro2); //spread operator for array(...)
    console.log(bro1);

    //spread operator for Object (...)
    const mentors1 = {
        typeScript : 'mezba',
        redux : 'mir',
        dbms : 'mizan'
    }
    const mentors2 = {
        prisma : 'firoz',
        nextjs : 'tonmoy',
        cloud : 'nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // -------------------------

    // Rest Operator
    
}