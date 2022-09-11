import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {Routes,Route} from 'react-router-dom'
import Navbar from '../../realmediawebsite/src/components/topbar/Topbar'


function App() {
  return (
    <>

<Routes>
<Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/Register" element={<Register />} />
</Routes>

</>
  )
}

export default App;