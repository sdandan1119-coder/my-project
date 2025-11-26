function homework() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The homework is done.");
        }, 5000);
    });
}

function cleanRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The room is clean.");
        }, 3500);
    });
}

function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You took out the trash.");
        }, 800);
    });
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
