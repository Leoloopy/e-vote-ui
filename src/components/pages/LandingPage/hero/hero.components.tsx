import "./hero.style.scss";
import PhoneBG from "../../../../assets/images/phone-double.png";
import { motion } from "framer-motion";


const Hero = () => {

    return (
      <>
        <motion.div 
        className="hero-bg"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:1}}
        >
          <div className="hero-content">
            <div className="hero-details">
              <p>
                Make your own polling and share easily with
              </p>
              <h1>Semicolon Votes</h1>
              <p className="hero-details-desc">Share your polling and receive your polling,
                    its's totally free for all and you can pay to get
                    pay to get more feature.
              </p>
            </div>

            <div className="sideImg">
              <img src={PhoneBG} alt="hero-phones" width="600px" />
            </div>
          </div>
        </motion.div>
      </>
    );
}

export default Hero;