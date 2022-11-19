import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import './App.css'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './Pages/Home';
import AddTeacher from './Pages/Teacher/AddTeacher';
import Holiday from './Pages/Other/Holiday';
import AddStudent from "./Pages/Student/AddStudent";
import ViewStudent from './Pages/Student/ViewStudent';
import ViewTeacher from './Pages/Teacher/ViewTeacher';
import Logout from "./Pages/Other/Logout"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <NavBar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddStudent" element={<AddStudent />} />
            <Route path="/ViewStudent" element={<ViewStudent />} />
            <Route path="/AddTeacher" element={<AddTeacher />} />
            <Route path="/ViewTeacher" element={<ViewTeacher />} />
            <Route path="/Holiday" element={<Holiday />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
