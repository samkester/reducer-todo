function reducer(state, action){
    switch(action.type){
        case "add":
            // data: an object containing the independent part of the new item

            // add fixed/dependent parts of the new item
            action.data["id"] = new Date();
            action.data["completed"] = false;

            // push new item into state
            return [...state, action.data];
        case "remove":
        case "toggle":
            // data: the ID of the object to switch states
            return state.map(item => // create a new array composed of one item for each item in the old array:
                {
                    if(item.id === action.data){ // if this is the right ID...
                        return {...item, completed: !item.completed} // ...then return a version with `completed` toggled
                    }
                    else return item; // otherwise just return it as-is
                });
        default: return state; 
    }
}

export default reducer;