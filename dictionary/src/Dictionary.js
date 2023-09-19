
const fetchDictionary =  async ( setErrorMessage, setDictionaryResponse, searchWord)=>{

  try{
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    
    if(data.title === 'No Definitions Found'){
      setErrorMessage("Sorry pal, we couldn't find definitions for the word you were looking for.")
    }else{ setDictionaryResponse(data) }
    
  }catch(error){
    setErrorMessage("Sorry pal, we couldn't find definitions for the word you were looking for.")
  }
    
  }
  export { fetchDictionary }