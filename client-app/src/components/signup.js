import {useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

function Signup (){
    const [username,setUsername] = useState("");
    const [email,setemail] = useState("");
    const [phonenumber,setPhonenumber] = useState("");
    const [password,setPassword] = useState("");
    const [Cpassword,setCpassword] = useState("");
    const [err,seterr] = useState("")
    const [pswderr,setPswderr] = useState("")
    const navigate = useNavigate()

    const userdatas = () =>{

     if(password === Cpassword){
        axios.post("http://localhost:5000/addUser",{
            username,email,phonenumber,password
        })
        .then(res => {
            if(res.data === "user added successfully"){
             return navigate("/")
            }else{
                return seterr(res.data)
            }
        })
     }else{
        setPswderr("password and confirm password should be same")

     }


        
    }
    return(
        <form className="container" autoComplete="off" onSubmit={(e)=>{
            e.preventDefault()
            userdatas();
        }}>
        <h2 className="text-center">SignUp</h2>
        <div className="mb-3 mt-3 " >
          <label for="username" className="form-label" >UserName:</label>
          <input onChange={(e)=> setUsername(e.target.value)} type="text" className="form-control"  required id="username" placeholder="Enter UserName" name="username"/>
        </div>
          
        <div className="mb-3">
          <label for="Email" className="form-label">Email:</label>
          <input onChange={(e)=> setemail(e.target.value)} type="email" className="form-control" required id="Email" placeholder="Enter Email" name="Email"/>
        </div>

        <div className="mb-3">
          <label for="phoneNumber" className="form-label">Mobile:</label>
          <input onChange={(e)=> setPhonenumber(e.target.value)} type="tel" pattern="[0-9]{5}[0-9]{5}" className="form-control" required id="phoneNumber" placeholder="9876543210" name="phoneNumber"/>
        </div>

        <div className="mb-3">
          <label for="pwd" className="form-label">Password:</label>
          <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" required id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        
        
        <div className="mb-3">
          <label for="Confirm Password" className="form-label">Confirm Password:</label>
          <input
          onClick={()=> setPswderr("")} 
          onChange={(e)=>{
            setCpassword(e.target.value)}} type="password" className="form-control" required id="Confirm Password" placeholder="confirm password" name="Confirm Password"/>
          {pswderr && <h2 className="text-center text-danger">{pswderr}</h2>}
          </div>

        <button type="submit" className="btn btn-primary">Submit</button>
               


       {err && <h2 className="text-center text-danger">{err}</h2>}


      </form> 


    )
}

export default Signup