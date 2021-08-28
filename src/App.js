import './App.css';
import SearchBar from './modules/SearchBar';
import Results from './modules/Results';
import Modal from './modules/Modal';
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
