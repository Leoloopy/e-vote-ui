import "./InputField.style.scss";

export type InputBoxType = {
    type: string;
    holder: string;
    name: string;
    handleChange: Function;
    width:string;
    id:string;
    // value:string;
}


const InputField = (props: InputBoxType) => {

    return (
        <>
        <input className="inputField" required 
        // value={props.value}
        id = {props.id}
        type={props.type} placeholder={props.holder} 
        name={props.name}  onChange ={ e => props.handleChange(e)}
        style={{width: props.width}}
        />
        </>
    );
};

export default InputField;
