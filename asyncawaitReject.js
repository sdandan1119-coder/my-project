function homework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  ishomework=true 
            if(ishomework){
                resolve("the homework are done ")
            }else{
                reject('the monework are not done')  
            }  

        },5000)
    })
}

function cleanRoom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const  iscleanRoom=true
            if(iscleanRoom){
                resolve("the room is clean ")
            }else{
                reject('the room is not clean ')  
            }  

            
        },3500)
    })
  
}

function takeTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        const  isTakeTrash=true 
        if(isTakeTrash){
            resolve("you take out the trash ")
        }else{
            reject('you didnt take out the trash')  
        }  

        },800)
    })
}


async function performTasks() {
    try {
        const homeworkResult = await homework();
        console.log(homeworkResult);
        
        const cleanRoomResult = await cleanRoom();
        console.log(cleanRoomResult);
        
        const takeTrashResult = await takeTrash();
        console.log(takeTrashResult);
        
        console.log("All the tasks are finished.");
    } catch (error) {
        console.error(error);
    }
}

performTasks();
