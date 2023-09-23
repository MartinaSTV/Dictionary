
const initialstate = {
    WordList:  JSON.parse( sessionStorage.getItem('word')) === null ? [] :JSON.parse( sessionStorage.getItem('word')),
    DarkMode: JSON.parse( sessionStorage.getItem('boolean')) === null ? true :JSON.parse( sessionStorage.getItem('boolean')) 
}
//console.log( JSON.parse(sessionStorage.getItem('word')))

const reducer = (state = initialstate, action)=>{
    switch(action.type){

        case 'DARK_MODE':
            sessionStorage.setItem('boolean', JSON.stringify(action.payload))
            return{
                ...state,
               DarkMode: action.payload
            }

        case 'ADD_WORD':

            sessionStorage.setItem('word', JSON.stringify( [...state.WordList, action.payload] ))
            return{
                ...state,
               WordList: [...state.WordList, action.payload]
            }

        case 'REMOVE_WORD':
            const removedWord =  state.WordList.findIndex((item)=> item.id === action.payload)
            const newarray = [...state.WordList]
            newarray.splice(removedWord, 1)

            // session storage
            const WordsInSession =  JSON.parse(sessionStorage.getItem('word')) 
            console.log(WordsInSession)
            const removeWordInSession = WordsInSession.findIndex((item)=> item.id === action.payload)
            const tempArry = [...WordsInSession]
            tempArry.splice(removeWordInSession, 1)
            sessionStorage.setItem('word', JSON.stringify( tempArry))
          
            return{
                ...state,
               WordList: newarray
            }
        
        default:
            return state
    }
}

export default reducer