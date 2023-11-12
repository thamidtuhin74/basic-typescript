{

    //distructuring --object &array disructuring

    //example user
    const user = {
        id : 543,
        name: {
            firstName : "Al",
            middleName : "Tahmiduzzaman",
            lastName : "Tuhin"
        },
        contactNo : "01789988998",
        address : "Ghana"

    }
    // N:B :- We can not declear a type [like-string, number,etc.] in distructuring.But We can use alias_name(defining types with a custom name) in distructuring

    const { //distructuring of object
        contactNo: phoneNumber ,//constactNo : alias_name
        name:{firstName : userName} //firstName : alias_name
    } = user;

    // ----------------------distructuring of Array-------------------

    const myFriends : string[] = ["supto","Xihad","Maruf","Shawon","Shuvo","Oishe","Rebeka"];

    const[a, b, jigri1 , jigri2, ...bestFriend] = myFriends;
    // const[, , jigri1 , jigri2, ...bestFriend] = myFriends; //skip 1st 2 values

    /*
    a = "supto",b = "Xihad"
    jigri1 = "maruf", jigri2 = "Shawon"
    bestFriend = "Shuvo","Oishe","Rebeka"
    */

    console.log(bestFriend)




}