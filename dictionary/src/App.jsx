import './App.scss'
import WordList from './components/WordList'
import SearchWord from './components/searchWord'

function App() {

  return (
   <main>
    <h1>Dictionary</h1>
    <section><SearchWord/></section>
    <section><WordList/></section>
   </main>
  )
}

export default App
