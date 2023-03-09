import { FaWindowClose } from 'react-icons/fa';
import "./modal.styles.scss";
import Lottie from "lottie-react-web";
import greyArr from '../../../assets/lotties/greyArr.json';
import leftArr from '../../../assets/lotties/leftArr.json';

const Modal = (props : any) => {

  const defaultOptions  = {
    loop: true,
    autoplay: true,
    animationData: props.errAnimate ? leftArr : greyArr,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="modal" onClick={props.closeModal}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <FaWindowClose className="close" onClick={props.closeModal}/>
            <div>
              <div>
                {props.animation}
              </div>
            </div>
            <h3>{props.message}</h3>
            <button onClick={props.closeModal}> 
              <Lottie 
                options={defaultOptions}
                height={20}
                width={50}
              />
            </button>
        </div>
    </div>
  )
}

export default Modal;
