
const initialstate = {
    WordList: []
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){

        case 'ADD_WORD':
            return{
                ...state,
               WordList: [...state.WordList, action.payload]
            }

        case 'REMOVE_WORD':
            const removedWord =  state.WordList.findIndex((item)=> item.idDrink === action.payload)
            const newarray = [...state.WordList]
            newarray.splice(removedWord, 1)

            return{
                ...state,
               WordList: newarray
            }
        
        default:
            return state
    }
}

export default reducer