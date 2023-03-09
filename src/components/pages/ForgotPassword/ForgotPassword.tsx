import { useState } from 'react'
import "./forgotPassword.styles.scss";
import Axios from "axios";
import Modal from "../../reusables/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react-web";
import resetPass from '../../../assets/lotties/ResetPass.json';
import PageContainer from "../../reusables/pageContainer.component";
import error404 from '../../../assets/lotties/error404.json';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const passData : any = {
    "newPassword" : "",
    "confirmNewPassword" : ""
  }

  const [password, setNewPassword] = useState(passData);
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setNewPassword({
        ...password,
        [name] : value
    })
  }

const [response, setResponse] = useState<boolean>(false)
const [msg, setMsg] = useState<string>("");
const [errAnimation, setErrAnimation] = useState<boolean>(false)

const handleSubmit = async (e : any) => {
  e.preventDefault()
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    headers:{"content-type" : "application/json"},
    body:JSON.stringify(password)
  }).then(res => {
    console.log(res)
    setResponse(res.ok)
    setMsg("Reset Password was successfull")
    res.status === 201 && setOpenModal(!openModal)
  }).catch(err => {
    console.log(err)
    setMsg(err.message)
    setErrAnimation(true)
    setOpenModal(!openModal)
  })
  setErrors(validate(password))
}

const validate = (val : any) : any => {
  console.log("validate is working")
  let err : any = {};
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if(!val.newPassword){
      err.newPassword = "Password is required!"
  }else if(val.newPassword.length < 8){
      err.newPassword = "Password should be more than 8 characters"
  }

  if(val.confirmNewPassword !== val.newPassword){
    err.confirmNewPassword = "Password does not match"
  }
  return err;
}

const exitModal = () => {
  setOpenModal(!openModal)
  if(response){
    navigate("/login");
  }else{
    console.log("Transition Failed")
  }
}

const defaultOptions  = {
  loop: true,
  autoplay: true,
  animationData: errAnimation ? error404 : resetPass,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

  return (
    <PageContainer>
    <div className="forgot_password">
        <div className="forgot_password_container">
            <form className="forgot_password_form" onSubmit={handleSubmit}>
                <h3>RESET PASSWORD</h3>
                <label>New Password</label>
                <input type="password" value={password.newPassword} name="newPassword" placeholder="Test123!@#" onChange = {handleChange} required/>
                <p>{errors.newPassword}</p>
                <label>Confirm Password</label>
                <input type="password" value={password.confirmNewPassword} name="confirmNewPassword" onChange = {handleChange} required/>
                <p>{errors.confirmNewPassword}</p>
                <button type="submit">Reset Password</button>
            </form>
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
        </div>
    </div>
    </PageContainer>
  )
}

export default ForgotPassword
