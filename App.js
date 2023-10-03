
import './App.css';
import Header from './components/header';
import Planet from './components/planet';
import Front from './components/Front';
import Meteors from './components/meteors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
  <Router>
  <Header/>
  <Routes>
  <Route exact path="/" element={<Front title="Welcome Rahul"/>}>
  </Route>
  <Route exact path="/meteors" element={<Meteors />}>
 </Route>
  <Route exact path="/planet" element={<Planet />}>
 </Route>
  </Routes>
  </Router>
    </>
  )
}

export default App;
