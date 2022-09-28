import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const[submitedInfo,setSubmitedInfo]=useState([]);
  const[errors,setErrors]=useState([]);


  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function submitedData(event){
event.preventDefault();

if(firstName.length>0){
const dataSubmited={firstName:firstName,lastName:lastName}

const newSubmittedInfo=[...submitedInfo,dataSubmited];

setSubmitedInfo(newSubmittedInfo);
setFirstName("");
setLastName("");
setErrors([]);
}
else{
setErrors(["You have not entered your first name"]);
}

  }




const dataToDisplay=submitedInfo.map((info,index)=>{

return (<div key={index} >
  <h1>FirstName is :{info.firstName}</h1>
<h1>LastName is : {info.lastName}</h1>
</div>
)}

)

  return (<React.Fragment>
     <form onSubmit={submitedData}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}

<h3>{dataToDisplay}</h3>
  </React.Fragment>

  );
}

export default Form;
