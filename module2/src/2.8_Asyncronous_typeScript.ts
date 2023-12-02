{

    // promise funtion


    // simulation
    const createPromise = () =>{
        return new Promise((resolve , reject)=>{// promise funtion
            const data : string = "Something";
        
            if(data){
                resolve(data); 
            }
            else{
                reject('failed to load data');
            }
        })

    }
    // calling promise function
    const showData = async () =>{
        const data = await createPromise();
        console.log(data);
    }
    showData();


}