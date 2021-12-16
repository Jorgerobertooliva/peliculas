import logo from './logo.svg';
import './App.css';
import AjaxApis from './components/AjaxApis';

function App() {
  return (
    <div className="App">
      <header className=" ">         
        <h1>
          Películas <code>para todas las edades</code> 
        </h1>
         
      </header>
      
      <AjaxApis  />
    </div>
  );
}

export default App;
