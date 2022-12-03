// Import data

// Import components
import './App.css';
import Directory from './Components/Directory'
import Directory from './Components/Gallery'
import Directory from './Components/Searchbar'
import Directory from './Components/Sidebar'

const App = () => {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
       <SearchBar />
       <Directory />
       <Sidebar />
       <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
