import axios from 'axios';

const baseUrl ="http://localhost:5000"


const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch((error) => {
      console.error("Error fetching to-do items:", error);
    });
}
const addToDo =(text,setText,setToDo) =>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data) =>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
     })
     .catch((error) =>{
        console.log("Error adding todo:",error);
     });

}

const updateToDo =(todoId,text,setToDo,setText,setIsUpdate) =>{
  axios
  .post(`${baseUrl}/update`,{_id:todoId,text})
  .then((data) =>{
      setText("")
      setIsUpdate(false)
      getAllToDo(setToDo)
   })
   .catch((err) => console.log(err))
  }

  const deleteToDo =(_id,setToDo) =>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data) =>{
      console.log(data)
        getAllToDo(setToDo)
     })
     .catch((err) => console.log(err))
    }

    
    
    export { getAllToDo, addToDo, updateToDo, deleteToDo };