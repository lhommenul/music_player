import './App.css';
import SearchBar from './modules/search/SearchBar';
import Results from './modules/results/Results';
import Modal from './modules/results/modal/Modal';
function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Results></Results>
      <Modal></Modal>
    </div>
  );
}
export default App;
