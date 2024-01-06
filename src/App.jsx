import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'

import Accueil from "./Pages/Accueil"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Historique from "./Pages/Historique"
import Patients from "./Pages/Patients"
import Profile from "./Pages/Profile"
import Notifications from "./Pages/Notifications"
import Planning from "./Pages/Planning"
import Error from "./Pages/404"



function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Accueil/>}>  </Route>
            <Route path="/login" element={<Login/>}>  </Route>
            <Route path="/signup" element={<Signup/>}>  </Route>
            <Route path="/historique" element={<Historique/>}>  </Route>
            <Route path="/patients" element={<Patients/>}>  </Route>
            <Route path="/profile" element={<Profile></Profile>}>  </Route>
            <Route path="/notifications" element={ <Notifications/>}>  </Route>
            <Route path="/planning" element={ <Planning/>}>  </Route>
            <Route path="/planning" element={ <Planning/>}>  </Route>
            <Route path="*" element={ <Error/>}>  </Route>
          </Routes>
        </Router>
      </div>  
    </>
  )
}

export default App
