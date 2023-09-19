import './App.scss'
import WordList from './components/WordList'
import SearchWord from './components/searchWord'

function App() {

  return (
   <main className='app'>
      <section className='app__wordList'><WordList/></section>
      <h1 className='app__header'>Dictionary</h1>
      <section className='app__searchWord'><SearchWord/></section>
   </main>
  )
}

export default App
