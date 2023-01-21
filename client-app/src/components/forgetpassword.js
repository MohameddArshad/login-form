import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'

function Forgetpassword (){

    const [phonenumber,setphonenumber] = useState('')
    const [password,setPassword] = useState("")
    const nav = useNavigate()
    const [error,seterr] = useState("")
    const forgetpswd = ()=>{
        axios.post("http://localhost:5000/passwordChange",{
            phonenumber,password  
        }).then(res => {
            if(res.data==="password changed successfully"){
                alert("password changed successfully")
                nav("/")
            }else{
                seterr(res.data)
            }
        })

    }
    return(
        <form className="container" autoComplete="off" onSubmit={e => {
            e.preventDefault()
            forgetpswd()
        }}>
        <h2 className="text-center">Forgot password</h2>
        <div className="mb-3 mt-3 " >
          <label for="phoneNumber" className="form-label" >Mobile:</label>
          <input onChange={e => setphonenumber(e.target.value)} type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control"  required id="phoneNumber" placeholder="98765 43210" name="phoneNumber"/>
        </div>
        <div className="mb-3">
          <label for="Newpwd" className="form-label">New Password:</label>
          <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" required id="Newpwd" placeholder="Enter your new password" name="Newpswd"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>

        {error && <h4 className="text-danger text-center">{error}</h4>}
        <p> <Link to="/login">Login</Link></p>
      </form> 


    )
}

export default Forgetpassword