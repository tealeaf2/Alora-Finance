import './App.css';
import sprout from './images/Sprout.png';
import home_dude from './images/Home-Dude.png';
import money_tree from'./images/Money_Tree.png';

function App() {
  return (
    <div className="App">
      <br /><br />

      <img src={sprout} className="sprout" alt="" width="35%" height="auto"/>
      <img src={home_dude} className="home_dude" alt="" width="5%" height="auto"/>
      <img src={money_tree} className="money_tree" alt="" width="20%" height="auto"/>
      <div className="horizontal-line"></div>


    </div>
  )
  }
  
export default App;
