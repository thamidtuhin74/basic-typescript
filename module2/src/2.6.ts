{
    // Constranis -> specify some property!

    // --------N:B::: when we must need some specific values then we use Constraints

    const addCourseToStudent = <T extends {name: string, email: string}/*Constrains */>(student : T) =>{
        const course:string = 'Next Level Developer';
        return {
            ...student,course
        }
    }
    const std1 = addCourseToStudent<{name:string,email:string,title:string}>({
        name:'Tuhin',
        email: 'thamidtuhin74@gmail.com',
         title: 'FrontendDeveloper'
        });
    const std2 = addCourseToStudent({
        name: 'Tuhin',
        email: 'thamidtuhin74@gmail.com',
        devType: 'FullStack Developer'
        })
}