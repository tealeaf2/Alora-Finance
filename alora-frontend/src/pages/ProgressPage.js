import '../styles/App.css';
import Header from '../global/Header';
import TreeCarousel from '../components/treeCarousel'

function Progress() {
    return (
      <div className="App">
        <Header />
        <div className="grid grid-cols-2">
          <div></div>
          <div><TreeCarousel/></div>
        </div>

      </div>
    )
}

export default Progress