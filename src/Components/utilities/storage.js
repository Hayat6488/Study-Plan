const addToDB = id =>{
    localStorage.clear();
    localStorage.setItem(id, 1);
}

export {addToDB};