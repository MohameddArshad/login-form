import {Route,Routes} from "react-router-dom"
import Login from './components/login'
import Home from './components/HomePage'
import Signup from './components/signup'
import Forgotpassword from './components/forgetpassword' 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Forgotpassword" element={<Forgotpassword/>}/>
    </Routes>
  );
}

export default App;
