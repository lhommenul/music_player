import './App.css';
import SearchBar from './modules/SearchBar';
import Results from './modules/Results';
import Modal from './modules/Modal';
import {useState,useEffect} from "react"
function App() {
  const [search_data, setSearchData] = useState({})
  useEffect(() => {
    console.log(search_data);
  }, [search_data])
  return (
    <div className="App">
      <SearchBar 
        set_search_data={setSearchData}
      ></SearchBar>
      <Results
        search_data={search_data}
      ></Results>
      <Modal></Modal>
    </div>
  );
}
export default App;
