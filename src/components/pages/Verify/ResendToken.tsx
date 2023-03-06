import { useState } from 'react';
import { motion } from "framer-motion";
import Modal from "../../reusables/Modal/Modal";
import { useNavigate } from "react-router-dom";
import "./resendToken.styles.scss";

const ResendToken = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    fetch("https://africa-smart.onrender.com/api/v1/user/resend", {
        method: "POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({"email":email})
    }).then(res => {
        console.log(res);
        res.ok && setOpenModal(!openModal)
    }).then(err => {
        console.log(err)
    })
   
  }

  const exitModal = () => {
    setOpenModal(!openModal)
    navigate("/verify", {state:{email:email}})
  }

  return (
    <motion.div 
            className="resend_Token"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{
                duration:2,
            }}
        >
      <input type="email" value={email} placeholder="acha@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={(e) => handleSubmit(e)}>SUBMIT EMAIL</button>
      {openModal && <Modal closeModal={exitModal}/>}
    </motion.div>
  )
}

export default ResendToken;
