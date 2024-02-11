import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import SignupPage from './Components/SignupPage';


const CoogTreeRouter = createBrowserRouter([
    {"path": "/login", 
    element: <LoginPage />}, 
    {"path": "/", 
    element: <Home />},
    {
        "path": "/signup",
        "element": <SignupPage />
    }
])

export default CoogTreeRouter