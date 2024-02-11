// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import LoginPage from "./Components/LoginPage";
// import Chart from "./Components/Chart";

import {
  RouterProvider,
} from "react-router-dom";
import CoogTreeRouter from './CoogTreeRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={CoogTreeRouter} />
      {/* <Chart /> */}
    </div>
  );
}

export default App;
