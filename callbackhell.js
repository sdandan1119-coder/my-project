// do homework
// clean the room
// take out the trash 






function homework(callback){
    setTimeout(()=>{
        console.log("the homework are done ");
        callback();
    },5000)
    
}
function cleanRoom(callback){
    setTimeout(()=>{
        console.log("the room is clean ");
        callback();
    },3500)
}
function takeTrash(callback){
    setTimeout(()=>{
        console.log("you take out the trash ");
        callback();
    },800)
}


homework(()=>{
    cleanRoom(()=>{
        takeTrash(()=>{
            console.log("all the tasks are finished ");
        })
    }) 
})




