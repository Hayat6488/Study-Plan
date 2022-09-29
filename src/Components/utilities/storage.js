const addToDB = id =>{
    localStorage.clear();
    localStorage.setItem('time', id);
}

export {addToDB};