import logo from './logo.svg';
import './App.css';

function App() {
  const food = ["Mobile Operating System", "Mobile Manufacturers"];
  const os = ["Android", "Blackberry","iphone","Windows Phone"];
  const Mfs = ["Samsung", "HTC","Micromax","Apple"];
  return (
    <div className="App paddingL">
        
        <Food food="Mobile Operating System"></Food>
        <ul>
          {os.map((e)=>{
            return <li>{e}</li>
          })}
        </ul>

        <Food food="Mobile Manufacturers"></Food>
        <ul>
          {Mfs.map((e)=>{
            return <li>{e}</li>
          })}
        </ul>
    </div>
  );
}

function Food(props){
  return <p className='bold'>{props.food}</p>
}

// function Foodsub(props1){
//   return <p>{props1.os}</p>
// }
export default App;
