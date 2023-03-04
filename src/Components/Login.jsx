import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';

const Login = () => {


const navigate = useNavigate()

    const [uname, setUname] = useState(" ");
    const [paswrd, setPaswrd] = useState(" ");

    
    let Handlelogin =(e)=>{
        e.preventDefault();
        console.log("handle login executing...")

        fetch("http://localhost:9091/login", {
            method:"GET",
            headers:{email:uname, password:paswrd}
        })
        .then((response)=>{ return(response.text())})
        .then(   (y)=>{ 
            console.log(y)
        if(y=="LOGIN SUCCESSFULL DONE") 
        {
            navigate('/home')
        } 
    } )
    }
    
    
  return (
    <div>    
        <section>
        <div className="imgbx">
            <img src="https://cdn.pixabay.com/photo/2017/09/01/13/08/guardian-angel-2704181_1280.jpg" alt="" />

        </div>
        <div className="contentbox">
            <div className="formbox">
                <h1>Login</h1>
                <form onSubmit={Handlelogin}>
                    <div className='inputbx'> 
                        <span>Username: </span>
                        <input type="text" onChange={(e)=>{setUname(e.target.value)}}/>
                    </div>
                    <div className='inputbx'> 
                        <span>Password: </span>
                        <input type="paddword" onChange={(e)=>{setPaswrd(e.target.value)}}/>
                    </div>
                    <div className="rember">
                        <input type="checkbox" />Remeber me
                    </div>
                    <div className='inputbx'> 
                        <input type="submit" value="Log In"/>
                    </div>
                    <div className="inputbx">
                    <p>Dont have an account?</p><Link to='/signup'><p> Sign-up</p></Link>
                    <Link to='/forgotpswrd'><p> Forgot password?</p></Link>
                    </div>
            


                </form>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login