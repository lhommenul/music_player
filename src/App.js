import './App.css';
import SearchBar from './modules/search/SearchBar';
import Results from './modules/results/Results';
import Modal from './modules/results/modal/Modal';
import {EventEmitter} from "./modules/event/index"
function App() {
//   EventEmitter.subscribe("getResultsFromTitle",async (response)=>{
//     // GET THE TITLE => .title
//     // GET THE ARTIST => .artist-credit[].artist.name
//     // GET THE ALBUM => .releases[].title
//     const total_responses = response[0].data.count;
//     let list_recordings = response[0].data.recordings;
//     list_recordings = list_recordings.map(res_title=>{
//        return {
//         title : res_title?.title,
//         name : res_title['artist-credit'][0]?.artist?.name,
//         album : res_title?.releases[0]?.title,
//        }
//     })
//     search = response[1]
//     loaded = true;
//     limit = 10;
//     offset = list_recordings.length;
//     type_data_requested = 0;
//     console.log(list_recordings);
//     list_res = list_recordings;
// })
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Results></Results>
      <Modal></Modal>
    </div>
  );
}
export default App;
