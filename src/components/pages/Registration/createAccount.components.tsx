import "./createAccount.styles.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Modal from "../../reusables/Modal/Modal";
import Axios from "axios";

const CreateAccount = () => {
    const navigate = useNavigate();

    const [imageUrl, setImageUrl ] = useState("");
    const [openModal, setOpenModal] = useState(false);
  

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

        
    const handleInputChange = (e : any) => {
        const {name, value} = e.target;
        
        setValues({ ...values, [name] : value});
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();

        const details : any = {
            "firstName" : values.firstName,
            "lastName" : values.lastName,
            "email" : values.email ,
            "phoneNumber" : values.phoneNumber , 
            "password" : values.password,
            "category" : values.category,
            "imageURL": imageUrl
        }
        
        console.log(details)
        fetch("https://africa-smart.onrender.com/api/v1/registration/register", {
            method:"POST",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(details)
        }).then(res => {
            console.log(res)
            res.ok && setOpenModal(!openModal)
        }).then(err => {
            console.log(err)
        })
    }

    const exitModal = () => {
        setOpenModal(!openModal)
        navigate("/verify", {state:{email:values.email}});
    }

    return(
        <>
        <pageContainer>
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
                        
                        <input type="text" name="phoneNumber" value={values.phoneNumber} placeholder="08069580949" onChange={handleInputChange} required/>
                        
                        <input type="password" name="password" value={values.password} placeholder="Test123!@#" onChange={handleInputChange} required/>

                        <select name= "category" value={values.category} onChange={handleInputChange} required>
                            <option>COHORT_I</option>
                            <option>COHORT_II</option>
                            <option>COHORT_III</option>
                            <option>COHORT_IV</option>
                            <option>COHORT_V</option>
                            <option>COHORT_VI</option>
                            <option>COHORT_VII</option>
                            <option>COHORT_VIII</option>
                            <option>COHORT_IX</option>
                            <option>COHORT_X</option>
                            <option>COHORT_XI</option>
                            <option>COHORT_XII</option>
                            <option>COHORT_XIII</option>
                            <option>COHORT_XIV</option>
                            <option>COHORT_XV</option>
                            <option>COHORT_XVI</option>
                        </select>
                        <button type="submit">Create Account</button>
                    </form>
                    {openModal && <Modal closeModal={exitModal}/>}
                </div>
            </motion.div>  
            </pageContainer>
        </>
    )
}

export default CreateAccount;