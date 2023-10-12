
import React ,{useState} from "react";

function Form(props){

    const [listText, setListText] = useState("");

    const submitForm = (e) =>{
        e.preventDefault();
        props.setListItems(listText);
        setListText("");
      }

    return(
        <>
        
            <form onSubmit = {submitForm}> 

                <label htmlFor = ""></label>
                <input id = "to-do-text" type="text" value={listText} onChange={(e)=>{setListText(e.target.value)}} />
                <button type ="submit">Add</button>
            </form>
        </>
    );
}

export default Form;