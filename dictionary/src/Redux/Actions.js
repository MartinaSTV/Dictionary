function addToList(word){
    return{
        type:'ADD_WORD',
        payload: word
    }
}
function removeFromList(word){
    return{
        type:'REMOVE_WORD',
        payload: word
    }
}
export { addToList, removeFromList }