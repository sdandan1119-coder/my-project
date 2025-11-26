


// do homework
// clean the room
// take  out the trash 

function homework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const  iscleanRoom=true 
            if(iscleanRoom){
                resolve("the homework are done ")
            }else{
                reject('the homework are not done')  
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

homework().then(value=>{
    console.log(value)
    return cleanRoom()
}).then(value=>{
    console.log(value)
    return takeTrash()
}).then(value=>{
    console.log(value)
    console.log("all the tasks are finished ")
}).catch(error=>console.error(error))
