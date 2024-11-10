import './App.css'
import Header from './components/Header'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import FootballCourts from './pages/FootballCourts'
import CreateTeam from './pages/CreateTeam'
import Footer from './components/Footer'
import FootballCourtDetails from './components/FootballCourtsDetails'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PasswordReset from './components/PasswordReset'
import Support from './pages/Support'

function App() {
  const location = useLocation();

  return (
    <div> 
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/fields" Component={FootballCourts}></Route>
        <Route path="/createteam" Component={CreateTeam}></Route> 
        <Route path="/help" Component={Support}></Route>
        <Route path="/fields/field-details/:id" Component={FootballCourtDetails}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/password-reset" Component={PasswordReset}></Route>
      </Routes>
      {location.pathname !== '/fields' && <Footer />}
    </div>
  );
}

export default App;
