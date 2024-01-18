import '../styles/App.css';
import sprout from '../images/Sprout.png';
import home_dude from '../images/Home-Dude.png';
import money_tree from'../images/Money_Tree.png';
import Header from '../global/Header';
import Adspace from '../global/Adspace'

function Progress() {
    return (
        <div className="App">
          <Header />
    
          <img src={sprout} className="sprout" alt="" width="35%" height="auto"/>
          <img src={money_tree} className="money_tree" alt="" width="20%" height="auto"/>
          <div className="horizontal-line"></div>

          <Adspace/>
          {/* <img src={'https://random.imagecdn.app/500/150'}/> */}
        </div>

      )
}

export default Progress