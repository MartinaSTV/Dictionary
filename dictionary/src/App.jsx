import { useDispatch } from 'react-redux'
import './App.scss'
import WordList from './components/WordList'
import SearchWord from './components/searchWord'
import { useState } from 'react'
import { darkMode } from './Redux/Actions'

// DarkMode boolean sparas i Redux store tillsammans med Favorit listan.

function App() {

  const dispatch = useDispatch()
  const [dark, setDark] = useState(true)
  const [Toggledark, setToggleDark] = useState(false)
  
  //toogla mellan mörkt och ljust tema
  const darkModeLightMode = ()=>{
    setToggleDark(!Toggledark)
   if(!Toggledark){ 
    setDark(false)
    dispatch(darkMode(false))
     } 
     else{
      setDark(true)
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
