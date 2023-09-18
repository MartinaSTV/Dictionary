
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
// måste fixa remove word, just nu tömmer den
        case 'REMOVE_WORD':

            return{
                ...state,
               WordList: []
            }
        
        default:
            return state
    }
}

export default reducer