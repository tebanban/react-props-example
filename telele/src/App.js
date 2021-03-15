
import './App.css';

//import components
import Nav from './components/nav';
import Tweets from './components/tweets';

function App() {
  //write javascript here
  const name= "Esteban";
  const age= "33"
  return (
    <div className="App">
      <h1> Hello React!!!</h1>
      <div className="home">  
      <Nav />
      <Tweets />
      </div>
      
    </div>
  );
}

export default App;
