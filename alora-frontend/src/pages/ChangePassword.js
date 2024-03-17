import Header from '../global/Header';
import StudentChangePassword from '../components/ProfilePage/studentChangePassword';
import TeacherChangePassword from '../components/ProfilePage/teacherChangePassword';

export default function ChangePassword() {
    return (

        <>
            <Header/>
            <StudentChangePassword/>
            {/* <TeacherChangePassword/> */}
        </>
    )
}