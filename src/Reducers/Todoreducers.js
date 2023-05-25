const initialData = {
    list: []
}
const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "Add-TODO":
            const { id, data } = action.payload
            return {
                ...state,
                data: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

            case "DELETE-TODO":
         const newList=   state.list.filter((elem)=>elem.id!== action.id )
            return {
                ...state,
                list:newList
            }

            case "REMOVE-TODO" :return{
                ...state,
                list:[]
            }
            default: return state;
    }
}

export default todoReducers;