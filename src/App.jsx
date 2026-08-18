import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanel from './components/SidePanel'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/Createaccount'

function App() {
return (
  <>
  <Router>
  <SidePanel />
  <main className="rightpanel">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/create" element={<CreateAccount />} />
     
      </Routes>
  </main>
  </Router>
  </>
  
)
}

export default App;
