import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './styles/App.css';
import HomePage from "./pages/HomePage";
import LessonsMainPage from "./pages/StudentPages/LessonsPage/LessonsMainPage";
import UnitsFromTopicPage from "./pages/StudentPages/LessonsPage/UnitsFromTopicPage"
import LessonsFromUnitPage from "./pages/StudentPages/LessonsPage/LessonsFromUnitPage"
import QuizPage from "./pages/StudentPages/QuizPage";
import StudentProfilePage from "./pages/StudentPages/ProfilePage";
import ChangePassword from "./pages/ChangePassword";
import ProgressPage from "./pages/StudentPages/ProgressPage";
import GamePage from "./pages/StudentPages/GamePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CoinQuestGame from "./games/CoinQuest/CoinQuestGame";

import TeacherProfilePage from "./pages/TeacherPages/ProfilePage";
import TeacherClassPage from "./pages/TeacherPages/ClassPage";
import TeacherLessonsPage from "./pages/TeacherPages/LessonsPage/LessonsPage";
import TeacherUnitsFromTopicPage from "./pages/TeacherPages/LessonsPage/TeacherUnitsFromTopicPage";
import TeacherLessonsFromUnitPage from "./pages/TeacherPages/LessonsPage/TeacherLessonsFromUnitPage";
import TeacherAssignPage from "./pages/TeacherPages/LessonsPage/TeacherAssignPage";

import Parser from "./pages/Parser"

export default function App() {

 return (
   <>
     <Router>
       <Routes>
         <Route exact path='/' element={<HomePage/>} />
         <Route path='/lessons/main' element={<LessonsMainPage/>} />
         <Route path='/lessons/topic/:tid/:tname' element={<UnitsFromTopicPage/>}/>
         <Route path='/lessons/topic/unit/:uid/:uname/:urid' element={<LessonsFromUnitPage/>}/>
         <Route path='/lesson/:uid/:lid/video-quiz' element={<QuizPage/>} />
         <Route path='/games' element={<GamePage/>} />
         <Route path='/progress' element={<ProgressPage/>} />
         <Route path='/profile' element={<StudentProfilePage/>} />
         <Route path='/profile/changepassword' element={<ChangePassword/>}/> {/* <-- Not sure if this way is secure */}
         <Route path='/login' element={<LoginPage/>} />
         <Route path='/register' element={<RegisterPage/>} />
         <Route path='/games/CoinQuest' element={<CoinQuestGame/>} />

         <Route path='/teacher/profile' element={<TeacherProfilePage/>} />
         <Route path='/teacher/class' element={<TeacherClassPage/>} />
         <Route path='/teacher/lessons/main' element={<TeacherLessonsPage/>} />
         <Route path='/teacher/lessons/topic/:tid/:tname' element={<TeacherUnitsFromTopicPage/>} />
         <Route path='/teacher/lessons/topic/unit/:uid/:uname/:urid' element={<TeacherLessonsFromUnitPage/>} />
         <Route path='/teacher/lesson/:uid/:lid/assign' element={<TeacherAssignPage/>} />

         <Route path='/run/parser' element={<Parser/>} />
       </Routes>
     </Router>
   </>
 );
}
