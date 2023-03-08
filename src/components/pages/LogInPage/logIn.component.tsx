import "./logIn.style.scss";
import { useState, createContext, useContext } from "react";
import Lottie from "lottie-react-web";
import blackBallot from '../../../assets/lotties/blackBallot.json';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "../../reusables/pageContainer.component";
import { HeaderContext } from "../../../App";



const LogIn = () => {

    const navigate = useNavigate();

    const loginData = {
        "email" : "",
        "password" : ""
    }

const [login, setLogin ] = useState(loginData);

const {headerInfo, setHeaderInfo} = useContext(HeaderContext);

const handleChange = (e : any) => {
    const {name, value } = e.target;
    setLogin({
        ...login,
        [name] : value
    })
}

const handleSubmit = async (e : any) => {
    e.preventDefault();
    try{
    let fetchData =   await fetch("https://africa-smart.onrender.com/api/v1/user/login",{
        method: "POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify(login)
    })

    let fetchDataResponse = fetchData.json();

     fetchDataResponse.then((data) => { 
         setHeaderInfo({...headerInfo, 
            image: data["data"].imageURL,
            username: data["data"].firstName,
            cohortName:data["data"].category,
            token:data["data"].token
        });
        navigate("/dashboard-home")
     })
    

} catch(err){console.log(err)}
    
}

    const defaultOptions  = {
        loop: true,
        autoplay: true,
        animationData: blackBallot,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <>
         <PageContainer>
            <motion.div 
                className="login"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1}}
                >
                <div className="login_container">
                    <Lottie 
                        options={defaultOptions}
                        height={200}
                        width={200}
                        style={{
                            filter:`drop-shadow(0px 10px 10px #1d3ade)`
                        }}
                    />
                    <form className="login_form" onSubmit={handleSubmit}>
                        <label>Email Address</label>
                        <input type="email" name="email" value={login.email} onChange={handleChange} required/>
                        <label>Password</label>
                        <input type="password" name="password" value={login.password} onChange={handleChange} required/>
                        <Link to="/resendToken">
                            <p>Forget Password</p>
                        </Link>
                        <button type="submit">Log In</button>
                        <p>Don't have an account? <Link to="/createAccount" style={{color:"white", textDecoration:"none", fontWeight:"bold"}}><span>SIGN UP</span></Link></p>
                    </form>
                </div>
            </motion.div> 
             </PageContainer>
        </>
    )
}
export default LogIn;