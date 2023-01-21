import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './style.css'

function Login (){
        const [username,setUsername] = useState('')
        const [password,setPassword] = useState('')
        const history = useNavigate();
        const [error,seterror] = useState("")
   const loginform = ()=>{
    axios.post("http://localhost:5000/login",{username,password})
    .then(res => {
        if(res.data==="login successfull"){
           history('/Home')

        }else{
            seterror("invalid username or password")
        }
    })
   }


    return(
        <form className="container" autoComplete="off" onSubmit={(e)=>{
            e.preventDefault()
            loginform()
        }}>
        <h2 className="text-center">Login </h2>

        
        <div className="mb-3 mt-3 " >
          <label htmlfor="username" className="form-label" >UserName:</label>
          <input onChange={e => setUsername(e.target.value) } type="text" className="form-control"  required id="username" placeholder="Enter UserName" name="username"/>
        </div>
        <div className="mb-3">
          <label htmlfor="pwd" className="form-label">Password:</label>
          <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" required id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="end"  to='/Signup'><button type="button" className="btn btn-primary" >SignUp</button></Link> 

        {error && <h4 className="text-danger text-center">{error}</h4>}


       <p> <Link to="/Forgotpassword">forgot password</Link></p>
      </form> 

    )
}

export default Login