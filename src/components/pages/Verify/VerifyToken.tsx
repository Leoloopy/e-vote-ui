import "./verify.styles.scss"
import { useState } from 'react'
import { motion } from "framer-motion";
import Lottie from "lottie-react-web";
import tokenMotion from '../../../assets/lotties/token.json';
import PageContainer from "../../reusables/pageContainer.component";
import { useLocation, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

const VerifyToken = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let userEmail : string = "";
  let root : string = "";

  if(location.state !== null){
    userEmail = location.state.email;
    root = location.state.root;
  }

  const [token, setToken] = useState(["", "", "", ""])
  const postToken = token.join("");


  const data = {
    "token" : `${postToken}`,
    "email" : `${userEmail}`
  }

  const handleChange = (index : number, e : any) => {
    const values = [...token];
    values[index] = e.target.value;
    setToken(values)
  }

  const handleSubmit = (e : any) => {
      e.preventDefault()
      console.log(data)
      fetch("https://africa-smart.onrender.com/api/v1/user/create",{
        method:"POST",
        headers:{"content-type" : "application/json"},
        body: JSON.stringify(data)
      }).then(res => {
        console.log(res)
        console.log(res.json)
        if(root === "/createAccount"){
          res.ok && navigate("/login")
        }else{
          res.ok && navigate("/forgotPassword")
        }
      }).then(err => {
        console.log(err)
      })
      // setToken([])
  }

  const defaultOptions  = {
    loop: true,
    autoplay: true,
    animationData: tokenMotion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <PageContainer>
        <motion.div 
        className="verify"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1}}
        >
          <div>
          <Lottie 
              options={defaultOptions}
              height={200}
              width={200}
          />
            <h1>Verify Token</h1>
            <form onSubmit={handleSubmit}>
            {token.map((token, index) => {
              return(
                <div key={index} className="verify_input">
                  <input 
                    type="number" 
                    value={token} 
                    required
                    onChange={(e) => handleChange(index, e)}/>
                </div>
              )
            })}
            <button type="submit">Verify Token</button>
            <Link to="/resendToken">
              <p>RESEND TOKEN</p>
            </Link>
            </form>
          </div>
        </motion.div>
    </PageContainer>
  )
}

export default VerifyToken;
