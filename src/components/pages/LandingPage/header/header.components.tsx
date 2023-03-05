import "./header.style.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
    return (
      <>
        <motion.div 
          className="header"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:1}}
          >
            <div className="Logo">
                <h3>SEMICOLON VOTES</h3>
            </div>

          <div className="nav-1">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Feature</li>
            </ul>
          </div>

          <div className="nav-2">
            <ul>
              <Link to="/createAccount">
                <li className="link-bg">Create Accont</li>
              </Link>
              <Link to="/login">
                <li className="link-bg">Sign In</li>
              </Link>
            </ul>
          </div>

        </motion.div>
      </>
    );
}



export default Header;