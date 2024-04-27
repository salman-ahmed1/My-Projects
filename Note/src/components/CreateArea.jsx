import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
const [beingTyped,setBeingTyped]=useState(false)

function isClicked(){
  setBeingTyped(true)
}
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
       {beingTyped && <input
          name="title"
          onChange={handleChange}
          onClick={isClicked}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
            onClick={isClicked}
          value={note.content}
          placeholder="Take a note..."
          rows={beingTyped?"3":"1"}
        />
       <Zoom in={beingTyped}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
       </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
