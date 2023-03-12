import "./createAccount.styles.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation} from "react-router-dom";
import Modal from "../../reusables/Modal/Modal";
import Axios from "axios";
import PageContainer from "../../reusables/pageContainer.component";
import Lottie from "lottie-react-web";
import blueEmail from '../../../assets/lotties/blueEmail.json';
import error404 from '../../../assets/lotties/error404.json';

const CreateAccount = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const PathName : string = location.pathname;

    const [imageUrl, setImageUrl ] = useState<string>("");
    const [openModal, setOpenModal] = useState<boolean>(false);
   
  
    
    const uploadImage = async (files : any) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "w3nbq64t")
       await Axios.post("https://api.cloudinary.com/v1_1/dxwvvt4rj/image/upload", formData)
            .then(res => {
                setImageUrl(res.data.url);
            }).catch(err => {
                console.log(err)
            })
    }

    const [values, setValues]= useState({
        "firstName" :  "",
        "lastName": "",
        "email": "",
        "phoneNumber": "",
        "password": "",
        "category":""
    })
 
    const [errors, setErrors] = useState<any>({});
        
    const handleInputChange = (e : any) => {
        const {name, value} = e.target;
        setValues({ ...values, [name] : value});
    };

    const [response, setResponse] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>("");
    const [errAnimation, setErrAnimation] = useState<boolean>(false)


    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const details : any = {
            "firstName" : values.firstName,
            "lastName" : values.lastName,
            "email" : values.email,
            "phoneNumber" : values.phoneNumber , 
            "password" : values.password,
            "category" : values.category,
            "imageURL": imageUrl
        }
        
        await fetch("https://africa-smart.onrender.com/api/v1/registration/register", {
            method:"POST",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(details)
        }).then(res => {
            console.log(res)
            setResponse(res.ok)
            setMsg("Check email for confirmation token")
            res.ok && setOpenModal(!openModal)
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
            setMsg(error.message)
            setErrAnimation(true)
            console.log(Object.keys(errors).length)
            console.log(errors)
            setOpenModal(!openModal)
        }) 
        setErrors(validate(values))
    }

    const validate = (val : any) : any => {
        let err : any = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if(!val.email){
            err.email = "Email address is required!"
        }else if(!regex.test(val.email)){
            err.email = "This is not a valid email format"
        }
        if(!val.phoneNumber){
            err.phoneNumber = "Phone number is required!"
        }else if(val.phoneNumber.length > 11 || val.phoneNumber.length < 11){
            err.phoneNumber = "Phone number should more or less than 11 characters!"
        }
        if(!val.password){
            err.password = "Password is required!"
        }else if(val.password.length < 8){
            err.password = "Password should be more than 8 characters"
        }
        if(!val.category){
            err.category = "Category is required!"
        }
      
        response && setValues({
            "firstName" :  "",
            "lastName": "",
            "email": "",
            "phoneNumber": "",
            "password": "",
            "category":""
        });

        return err;
    }

    const exitModal = () => {
        setOpenModal(!openModal)
            if(response){
                navigate("/verify", {state:{
                    email:values.email,
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

    return(
        <>
        <PageContainer>
            <motion.div 
            className="register"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:1}}
            >
                <div className="register_container">
                    <h1>Create Account</h1>
                    <form className="register_form" onSubmit={ handleSubmit }>

                        <input type="file" accept="image/*" name="imageURL" multiple = {false} onChange={(e) => {uploadImage(e.target.files)}} required/>
                        
                        <input type="text" name="firstName" value={values.firstName} placeholder="First_Name" onChange={handleInputChange} required/>
                      
                        <input type="text" name="lastName" value={values.lastName} placeholder="Last_Name" onChange={handleInputChange} required/>
                     
                        <input type="text" name="email" value={values.email} placeholder="gab.oyinlola@gmail.com" onChange={handleInputChange} required/>
                        <p>{errors.email}</p>
                        <input type="text" name="phoneNumber" value={values.phoneNumber} placeholder="08069580949" onChange={handleInputChange} required/>
                        <p>{errors.phoneNumber}</p>
                        <input type="password" name="password" value={values.password} placeholder="Test123!@#" onChange={handleInputChange} required/>
                        <p>{errors.password}</p>
                        <select name= "category" value={values.category} onChange={handleInputChange} required>
                            <option>COHORT_I</option>
                            <option>COHORT_II</option>
                            <option>COHORT_III</option>
                            <option>COHORT_IV</option>
                            <option>COHORT_V</option>
                        </select>
                        <p>{errors.category}</p>
                        <button type="submit">Create Account</button>
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
            </motion.div>  
            </PageContainer>
        </>
    )
}

export default CreateAccount;




