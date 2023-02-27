
import './App.css';
import arr from './data'
import Show from './Componets/new'
function App() {
console.log(arr)
  return (
    <div className="App">
      {arr.map((el)=>(
       <h1>{el.name}</h1>
      ))}
    </div>
  );
}

export default App;
