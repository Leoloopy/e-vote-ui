import { FaWindowClose } from 'react-icons/fa';
import "./modal.styles.scss";
import Lottie from "lottie-react-web";
import blueEmail from '../../../assets/lotties/blueEmail.json';

const Modal = (props : any) => {


    const defaultOptions  = {
        loop: true,
        autoplay: true,
        animationData: blueEmail,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className="modal" onClick={props.closeModal}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <FaWindowClose className="close" onClick={props.closeModal}/>
            <div>
            <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
            />
            </div>
            <h3>Check email for confirmation token</h3>
        </div>
    </div>
  )
}

export default Modal
