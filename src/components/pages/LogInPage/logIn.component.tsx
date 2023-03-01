import "./logIn.style.scss";
import Lottie from "react-lottie";
import blackBallot from '../../../assets/lotties/blackBallot.json';
import { NavLink } from "react-router-dom";



const LogIn = () => {

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
            <div className="login">
                <div className="login_container">
                    <Lottie 
                        options={defaultOptions}
                        height={200}
                        width={200}
                        style={{
                            filter:"drop-shadow(0px 10px 10px #1d3ade)"
                        }}
                    />
                    <form className="login_form">
                        <label>Email Address</label>
                        <input type="email" placeholder="acha@gmail.com"/>
                        <label>Password</label>
                        <input type="password" placeholder="peterObi"/>
                        <p>Forget Password</p>
                        <button>Log In</button>
                        <p>Don't have an account? <NavLink to="/createAccount" style={{color:"white", textDecoration:"none", fontWeight:"bold"}}><span>SIGN UP</span></NavLink></p>
                    </form>
                </div>
            </div>       
        </>
    )
}
export default LogIn;