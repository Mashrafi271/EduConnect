
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Teachers from './Pages/Teachers';
import Students from './Pages/Students';
import LoginSignup from './Pages/LoginSignup.jsx'; // Or './Pages/LoginSignup.js' if your file extension is .js

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar /> {/* Renders the Navbar component, the navigation bar for the website */}
        <Routes> {/* Defines the routing structure for the application */}
          <Route path="/" element={<Home />} /> {/* Defines a route for the homepage ("/") and renders the Home component when this path is matched */}
          <Route path="/teachers" element={<Teachers category="teachers" />} /> {/* Defines a route for the "/teachers" path and renders the Teachers component, passing "teachers" as a category prop */}
          <Route path="/students" element={<Students category="students" />} /> {/* Defines a route for the "/students" path and renders the Students component, passing "students" as a category prop */}
          <Route path="/login_signup" element={<LoginSignup />} />
        </Routes> {/* Closes the Routes component, encapsulating all defined routes */}
      </BrowserRouter>
    </div>
  );
}

export default App;

