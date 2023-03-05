import "./hero.style.scss";
import PhoneBG from "../../../../assets/images/phone-double.png";


const Hero = () => {

    return (
      <>
        <div className="hero-bg">
          <div className="hero-content">
            <div className="hero-details">
              <p>
                Make your own polling and share easily with{" "}
                <strong>Semicolon Votes</strong>
                <div className="hero-details-desc">Share your polling and receive your result,
                    it's totally free for all and you can pay to get
                     more feature.
                </div>
              </p>
            </div>

            <div className="sideImg">
              <img src={PhoneBG} alt="hero-phones" width="600px" />
            </div>
          </div>
        </div>
      </>
    );
}

export default Hero;