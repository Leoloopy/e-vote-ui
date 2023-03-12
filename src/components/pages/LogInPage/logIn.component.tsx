import "./logIn.style.scss";
import { useState, createContext, useContext } from "react";
import Lottie from "lottie-react-web";
import blackBallot from '../../../assets/lotties/blackBallot.json';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "../../reusables/pageContainer.component";
import Axios from "axios";
import { HeaderContext } from "../../../App";



const LogIn = () => {

    const navigate = useNavigate();

    const loginData = {
        "email" : "",
        "password" : ""
    }

const [login, setLogin ] = useState(loginData);
const [errors, setErrors] = useState<any>({});

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

    await Axios.post("https://africa-smart.onrender.com/api/v1/user/login",login)
    .then(res => {
        console.log(res)
         const jwtToken = res.data.data.token
         res.data.successful && navigate("/dashboard-home", {state:{JWToken : jwtToken}});
         
    }).catch(err => {
        console.log(err)
    }) 
  
    setErrors(validate(login))
    setLogin({
        "email" : "",
        "password" : ""
    })    
}

const validate = (val : any) : any => {
    let err : any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
    
    if(!val.email){
        err.email = "Email address is required!"
    }else if(!regex.test(val.email)){
        err.email = "This is not a valid email format"
    }
    if(!val.password){
        err.password = "Password is required!"
    }else if(val.password.length < 8){
        err.password = "Password should be more than 8 characters"
    }
    return err;
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
                        <p className="err">{errors.email}</p>
                        <label>Password</label>
                        <input type="password" name="password" value={login.password} onChange={handleChange} required/>
                        <p className="err">{errors.password}</p>
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