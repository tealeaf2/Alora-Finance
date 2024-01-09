import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import './styles/App.css';
import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'
import ProfilePage from './pages/ProfilePage'
import ProgressPage from './pages/ProgressPage'
import GamePage from './pages/GamePage'


export default function App() {
 return (
   <>
     <Router>
       <Routes>
         <Route exact path='/' element={<HomePage/>} />
         <Route path='/lessons' element={<LessonsPage/>} />
         <Route path='/games' element={<GamePage/>} />
         <Route path='/progress' element={<ProgressPage/>} />
         <Route path='/profile' element={<ProfilePage/>} />
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
