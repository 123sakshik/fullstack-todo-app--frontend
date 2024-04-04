import { useState } from "react";
import ToDo from "./components/ToDo";
import { useEffect } from "react";
import { addToDo ,getAllToDo,updateToDo,deleteToDo } from "./utils/HandleApi";
import Search from './components/Search';

function App() {
  const [toDo,setToDo] = useState([])
  const[text,setText] =useState()
  const[isUpdate,setIsUpdate] = useState(false)
  const [todoId,setToDoId] = useState("")

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>{
    getAllToDo(setToDo)
  },[])

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const updateMode =(_id,text) =>{
    setIsUpdate(true)
    setText(text)
    setToDoId(_id)

  }

  // Filter the todos based on the search term
  const filteredTodos = toDo.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">

     <div className="container">

      <h1>ToDo App</h1>

      <div className="top">
        <input type="text" placeholder="Add Todos..."
         value={text}
         onChange={(e) => setText(e.target.value)} />

        <div
         className="add"
         onClick={isUpdate ?
         () =>updateToDo(todoId,text,setToDo,setText,setIsUpdate)
         :() =>addToDo(text,setText,setToDo)}>
          {isUpdate ?"Update":"Add"}
          </div>
        </div>
        

        <div className="list">
         {filteredTodos.map(item =>(
          <ToDo
           key={item._id} 
           text={item.text} 
           updateMode={() => updateMode(item._id,item.text)}
           deleteToDo={() => deleteToDo(item._id,setToDo)}
            />
            ))}
           </div>

        <div className="App">
      <Search onSearch={handleSearch} />
    </div>


        </div>

      </div>

  
  
  );
}

export default App;