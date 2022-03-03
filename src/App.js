import logo from './logo.svg';
import './App.css';

function App() {
  const arr=["Android","Blackberry","iPhone","windows Phone"];
  const arr1=["Samsung","HTC","Micromax","Apple"]

  return (
    <div className="App">
<h1>Mobile Oprating System</h1>
        <ul>{arr.map((e)=>(
          <li>{e}</li>
        ))}</ul>


       <h1>Mobile Manufacturers</h1>
       <ul>{arr1.map((el)=>(
          <li>{el}</li>
        ))}</ul>


    </div>
  );
}

export default App;
