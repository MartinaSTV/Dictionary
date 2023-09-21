
const initialstate = {
    WordList: [],
    DarkMode: true
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){

        case 'DARK_MODE':
            return{
                ...state,
               DarkMode: action.payload
            }

        case 'ADD_WORD':
            return{
                ...state,
               WordList: [...state.WordList, action.payload]
            }

        case 'REMOVE_WORD':
            const removedWord =  state.WordList.findIndex((item)=> item.id === action.payload)
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