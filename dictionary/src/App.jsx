import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import WordList from './components/WordList'
import SearchWord from './components/searchWord'
import { useState } from 'react'
import { darkMode } from './Redux/Actions'

// DarkMode boolean sparas globalt runt app i Redux store tillsammans med Favorit ord listan.
// Eftersom man skulle spara flera saker globalt tänkte jag att det va lättast att göra en redux store.

function App() {

  const dispatch = useDispatch()
  const dark = useSelector((state)=>{ return state.DarkMode})
  const [Toggledark, setToggleDark] = useState(false)
  
  //Toogla mellan mörkt och ljust tema.
  const darkModeLightMode = ()=>{
    setToggleDark(!Toggledark)
   if(!Toggledark){ 
    dispatch(darkMode(false))
     } 
     else{
      dispatch(darkMode(true))
     }
  }

  return (
   <main className={dark? `app`: `app-dark`}>
    <button className={dark? 'app__button': 'app-dark__button'} onClick={ darkModeLightMode }>{Toggledark? <p>Light</p>: <p>Dark</p>}</button>
      <section className={dark?'app__wordList': 'app-dark__wordList'}><WordList/></section>
      <h1 className={dark? 'app__header': 'app-dark__header'}>Dictionary</h1>
      <section className='app__searchWord'><SearchWord/></section>
   </main>
  )
}

export default App
