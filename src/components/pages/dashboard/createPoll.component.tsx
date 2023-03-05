import PageContainer from "../../reusables/pageContainer.component";
import {IoIosArrowRoundBack} from "react-icons/io";
import InputField from "../../reusables/InputField.component";
import {AiFillPlusCircle} from "react-icons/ai";
import "./createPoll.styles.scss";
import { MouseEvent } from "react";
import React, {useState} from "react";
import {IoIosRemoveCircle} from "react-icons/io";

type PollNumber = {
  id:number;
  name:string;
}

const CreatePoll = () => {

    const [inputField, setInputField] = useState<number>(0);
    const [newInputField, setNewInputField] = useState<PollNumber[]>([]);
    console.log(newInputField);      

    const handleAddField = (event: MouseEvent<Element>): void => {
      event.preventDefault();
      setInputField(prevInputField =>  prevInputField + 1); 
      setNewInputField([...newInputField, { id: inputField, name: "text"+inputField }]);
    }

    const handleDelete = (event: MouseEvent<Element>) => {
      event.preventDefault();
      const targetId: string = (event.target as HTMLElement).id;
      console.log(targetId);   
      setNewInputField(prevInputFields => prevInputFields.filter(inputField => inputField.name !== targetId));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log(e.target.value);
    };




    return (
      <>
        <PageContainer>
          <div className="poll-header">
            <IoIosArrowRoundBack className="arrowBack" />
            <p>Create Poll</p>
            <div className="profile-image"></div>
          </div>
          <div className="poll-body">
            <p>Fill out the fields below to create your poll</p>
            <form>
              <div className="poll-time">
                <div className="fieldLabel">Start Time</div>
                <InputField 
                  id="date-1" width="50%" type="datetime-local"  name="datetime"  holder="Enter Poll Start Time"  handleChange={handleChange} />
                <div className="fieldLabel">End Time</div>
                <InputField
                  id="date-2" width="50%" type="datetime-local" name="datetime" holder="Enter Poll end Time"  handleChange={handleChange} />
              </div>
              <div className="fieldLabel">Poll Title</div>
              <InputField
                id="poll-title" width="96%" type="text"  name="poll title"  holder="Enter Poll Title" handleChange={handleChange} />
              <div className="fieldLabel">Poll Questions</div>
              <InputField
                id="poll-questions"  width="96%" type="text"  name="poll title" holder="Enter Poll Question" handleChange={handleChange} />
              <div className="poll-options">
                <div className="fieldLabel">Add Poll Options</div>
                {newInputField.map((item) => (
                    <div className="options-btn" key={item.id}>
                      <input
                        className="add-poll"  onChange={handleChange} placeholder="enter options" type="text" key={item.id} />
                      <IoIosRemoveCircle className="delete-btn" id={item.name} onClick={handleDelete} />
                    </div>
                ))}
                <AiFillPlusCircle  className="plus-circle" onClick={handleAddField} />
              </div>
            </form>
          </div>
        </PageContainer>
      </>
    );
    
}



export default CreatePoll;


