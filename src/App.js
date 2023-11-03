import './App.css';
import Search from './Components/Search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <>
      <Search onSearchChange={handleOnSearchChange}/>
    </>
  );
}

export default App;
