import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './styles/App.css';
import HomePage from "./pages/HomePage";
import UnitsPage from "./pages/UnitsPage";
import LessonPage from "./pages/LessonPage";
import ProfilePage from "./pages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";
import ProgressPage from "./pages/ProgressPage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoinQuestGame from "./games/CoinQuest/CoinQuestGame";

export default function App() {

 return (
   <>
     <Router>
       <Routes>
         <Route exact path='/' element={<HomePage/>} />
         <Route path='/lessons' element={<UnitsPage/>} />
         <Route path='/unit/:uid/lesson/:lid/:rlid' element={<LessonPage/>} />
         <Route path='/games' element={<GamePage/>} />
         <Route path='/progress' element={<ProgressPage/>} />
         <Route path='/profile' element={<ProfilePage/>} />
         <Route path='/profile/changepassword' element={<ChangePassword/>}/> {/* <-- Not sure if this way is secure */}
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/register' element={<RegisterPage/>} />
         <Route path='/games/CoinQuest' element={<CoinQuestGame/>} />
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
