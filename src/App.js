import './App.css';
import SearchBar from './modules/search/SearchBar';
import Results from './modules/results/Results';
import Modal from './modules/results/modal/Modal';
import { store } from './modules/store';
function App() {
  return (
    <div className="App">
      <SearchBar store={store}></SearchBar>
      <Results store={store}></Results>
      <Modal store={store}></Modal>
    </div>
  );
}

export default App;
