import { useState } from 'react';
import { motion } from "framer-motion";
import Modal from "../../reusables/Modal/Modal";
import { useNavigate, useLocation } from "react-router-dom";
import PageContainer from "../../reusables/pageContainer.component";
import "./resendToken.styles.scss";
import Lottie from "lottie-react-web";
import blueEmail from '../../../assets/lotties/blueEmail.json';
import error404 from '../../../assets/lotties/error404.json';

const ResendToken = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const PathName = location.pathname;

  const [email, setEmail] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});
  const [msg, setMsg] = useState<string>("");
  const [errAnimation, setErrAnimation] = useState<boolean>(false)
  const [response, setResponse] = useState<boolean>(false)

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    await fetch("https://africa-smart.onrender.com/api/v1/user/resend", {
        method: "POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({"email":email})
    }).then(res => {
        console.log(res);
        setResponse(res.ok)
        setMsg("Check email for confirmation token")
        res.ok && setOpenModal(!openModal)
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
        setMsg(err.message)
        setErrAnimation(true)
        setOpenModal(!openModal)
    })
    setErrors(validate(email))
  }


  const validate = (val : any) : any => {
    let err : any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!val){
        err.email = "Email address is required!"
    }else if(!regex.test(val)){
        err.email = "This is not a valid email format"
    }
    return err;
}


const exitModal = () => {
  setOpenModal(!openModal)
  if(response){
    navigate("/verify", {state:{
                            email:email,
                            root:PathName
                          }});
  }else{
    console.log("Transition Failed")
  }
    
}

  const defaultOptions  = {
    loop: true,
    autoplay: true,
    animationData: errAnimation ? error404 : blueEmail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <PageContainer>
    <motion.div 
            className="resend_Token"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
                duration:2,
            }}
        >
      <input type="email" value={email} placeholder="acha@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
      <p>{errors.email}</p>
      <button className="sub" onClick={(e) => handleSubmit(e)}>SUBMIT EMAIL</button>
      {openModal && <Modal 
                      closeModal={exitModal} 
                      animation={<Lottie 
                                    options={defaultOptions}
                                    height={150}
                                    width={150}
                                />} 
                      message={msg}
                      errAnimate={errAnimation}
                      />}
    </motion.div>
    </PageContainer>
  )
}

export default ResendToken;
