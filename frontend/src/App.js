// import logo from './logo.svg';
import "./App.css";
import CoogNav from "./Components/CoogNav";
// import Chart from "./Components/Chart";
import HTMLFileRenderer from "./Components/Chart";

import { RouterProvider } from "react-router-dom";
import CoogTreeRouter from "./CoogTreeRouter";

function App() {
  return (
    <div className="App">
      <CoogNav />
      <RouterProvider router={CoogTreeRouter} />
    </div>
  );
}

export default App;
