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
function darkMode(bolean){
    return{
        type:'DARK_MODE',
        payload: bolean
    }
}
export { addToList, removeFromList, darkMode }