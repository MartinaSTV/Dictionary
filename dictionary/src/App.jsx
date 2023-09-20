import { useDispatch } from 'react-redux'
import './App.scss'
import WordList from './components/WordList'
import SearchWord from './components/searchWord'
import { useState } from 'react'
import { darkMode } from './Redux/Actions'

function App() {

  const dispatch = useDispatch()
  const [dark, setDark] = useState(true)

  return (
   <main className={dark? `app`: `light__app`}>
    <button className='app__button' onClick={ ()=>{ setDark(false); dispatch(darkMode(dark)) } }>Dark Mode</button>
      <section className='app__wordList'><WordList/></section>
      <h1 className='app__header'>Dictionary</h1>
      <section className='app__searchWord'><SearchWord/></section>
   </main>
  )
}

export default App
