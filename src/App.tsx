import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Fields from './pages/Fields'
import CreateTeam from './pages/CreateTeam'
import Communication from './pages/Communication'
import LowestSection from './components/LowestSection'
import FieldDetails from './components/FieldDetails'

function App() {

  return (
   <div>
    <Header/>
    <Routes>
      <Route path="/" Component={HomePage}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/fields' Component={Fields}></Route>
      <Route path='/createteam' Component={CreateTeam}></Route> 
      <Route path='/help' Component={Communication}></Route>
      <Route path='/fields/field-details/:id' Component={FieldDetails}></Route>
    </Routes>
    <LowestSection></LowestSection>
   </div>
  )
}

export default App
