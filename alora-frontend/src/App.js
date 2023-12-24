import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import './styles/App.css';
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import Profile from './pages/Profile'
import Games from './pages/Games'


export default function App() {
 return (
   <>
     <Router>
       <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route path='/lessons' element={<Lessons/>} />
         <Route path='/games' element={<Games/>} />
         <Route path='/profile' element={<Profile/>} />
       </Routes>
     </Router>
   </>
 );
}


// import './styles/App.css';
// import Progress from './pages/Progress'
// import Lessons from './pages/Lessons'
// import Profile from './pages/Profile'
// import Games from './pages/Games'

// function App() {
//   return (
//     <>
//       <Progress/>
//       {/* <Games/>
//       <Lessons/>
//       <Profile/> */}
//     </>
//   )
//   }
  
// export default App;
