import "./logIn.style.scss";
import Lottie from "lottie-react-web";
import blackBallot from '../../../assets/lotties/blackBallot.json';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "../../reusables/pageContainer.component";


const LogIn = () => {

    const defaultOptions  = {
        loop: true,
        autoplay: true,
        animationData: blackBallot,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
      <>
        <PageContainer>
          <motion.div
            className="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="login_container">
              <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                style={{
                  filter: "drop-shadow(0px 10px 10px #1d3ade)",
                }}
              />
              <form className="login_form">
                <label>Email Address</label>
                <input type="email" placeholder="acha@gmail.com" required />
                <label>Password</label>
                <input type="password" placeholder="peterObi" required />
                <p>Forget Password</p>
                <button>Log In</button>
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/createAccount"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    <span>SIGN UP</span>
                  </Link>
                </p>
              </form>
            </div>
          </motion.div>
        </PageContainer>
      </>
    );
}
export default LogIn;