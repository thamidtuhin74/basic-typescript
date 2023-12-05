{

    // promise funtion


    // Custome Data load
    // simulation for a String / boolean etc
    const createPromise = (): Promise<string> =>{
        return new Promise<string>((resolve , reject)=>{// promise funtion
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
    const showData = async () : Promise<string>=>{
        const data: string = await createPromise();
        console.log(data);
        return data
    }
    showData();
    
    // simulation for a Object

    type Something = {something:string}
    const createPromiseForObject = (): Promise<Something> =>{
        return new Promise<Something>((resolve , reject)=>{// promise funtion
            const data : Something = {something:"Something from Object"};
        
            if(data){
                resolve(data); 
            }
            else{
                reject('failed to load data');
            }
        })

    }
    // calling promise function
    const showDataOfObject = async () : Promise<Something>=>{
        const data: Something = await createPromiseForObject();
        console.log(data.something);
        return data
    }
    showData();



    // Data Load from server side
    type ToDo = {
        userId : number;
        id : number;
        title : string;
        completed: false;
    }

    const getToDo = async () : Promise<ToDo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        return data;
    }

    getToDo();


}