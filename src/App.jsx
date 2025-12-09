import './App.css'
import CreatePost from './components/CreatePost'
import DataFetcher from './components/DataFetcher'
import FetchAndDelete from './components/FetchAndDelete'
import SingleData from './components/SingleData'
function App() {

  return (
    <>
      <DataFetcher />
      <div>Egy darab cím</div>
      <SingleData/>
      <div>Form</div>
      <CreatePost/>
      <div>Delete</div>
      <FetchAndDelete/>
    </>
  )
}

export default App
