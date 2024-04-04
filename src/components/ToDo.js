import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { AiFillDelete } from 'react-icons/ai';

const ToDo = ({ text, updateMode, deleteToDo }) => {
    return (
      <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
          <EditIcon className="icon edit" onClick={updateMode} />
          <AiFillDelete className="icon delete" onClick={deleteToDo} />
        </div>
      </div>
    );
  };
export default ToDo;