


// do homework
// clean the room
// take  out the trash 

function homework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("the homework are done ")
        },5000)
    })
}

function cleanRoom(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("the room is clean ")
        },3500)
    })
  
}
function takeTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("you take out the trash")
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
})
