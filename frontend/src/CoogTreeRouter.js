import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import SignupPage from './Components/SignupPage';
import ClassAdd from './Components/ClassAdd';
import FindClassmates from './Components/FindClassmates';
import StudentProfile from './Components/StudentProfile';


const CoogTreeRouter = createBrowserRouter([
    {"path": "/login", 
    element: <LoginPage />}, 
    {"path": "/", 
    element: <Home />},
    {
        "path": "/signup",
        "element": <SignupPage />
    },
    {
        "path": "/newclass", 
        "element": <ClassAdd/>
    },
    {
        "path": "/getclassmates",
        "element": <FindClassmates />
    }
    ,
    {
        "path": "/profile",
        "element": <StudentProfile/>
    },
])

export default CoogTreeRouter