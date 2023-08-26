import './App.css';
import Navbar from './components/Navbar';
import UrlInputSection from './components/UrlInputSection';
import Footer from './components/Footer';
import About from './components/About';
import firebase from "./firebase";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 /* Link*/
} from "react-router-dom";
function App() {
  return (
   <>
    <Router>

          <Navbar></Navbar>
   
              <Routes>
   
                  <Route path="/home"  element={<div className="container my-5"><UrlInputSection></UrlInputSection></div>}></Route>
                  <Route path="/about"  element={<div className="container my-5"><About></About></div>}></Route>
                  <Route path="/"  element={<div className="container my-5"><UrlInputSection></UrlInputSection></div>}></Route>
   
   
              </Routes>
           
           
           <Footer></Footer>
      
      
    </Router>
   </>
  );
}

export default App;
