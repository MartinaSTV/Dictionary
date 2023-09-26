
const fetchDictionary =  async ( setErrorMessage, setDictionaryResponse, searchWord)=>{

  if(searchWord === ''){ return setErrorMessage('Type a word you want information about')}
  try{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    
    if(data.title === 'No Definitions Found'){
      console.log(data.message)
     setErrorMessage(data.message)
    }else{ setDictionaryResponse(data) }
    
  }catch(error){
    setErrorMessage("Sorry pal, we couldn't find definitions for the word you were looking for.")
  }
    
  }
  export { fetchDictionary }