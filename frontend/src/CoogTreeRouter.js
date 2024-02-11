import {createBrowserRouter} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';


const CoogTreeRouter = createBrowserRouter([
    {"path": "/login", 
    element: <LoginPage />}, 
    {"path": "/", 
    element: <Home />}
])

export default CoogTreeRouter