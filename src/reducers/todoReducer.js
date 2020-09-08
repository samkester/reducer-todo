function reducer(state, action){
    switch(action.type){
        case "add":
        case "remove":
        case "toggle":
        case "set":
        default: return state; 
    }
}

export default reducer;