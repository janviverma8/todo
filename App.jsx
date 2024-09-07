import React,{useState} from "react"
import './App.css'
function App(){
  const [todos,setTodos] = useState([]);
  const [formData,setFormData] = useState({
    title:"",
    description:""
  })
  const handleFormInput = e =>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
const handleKeyDown = e =>{
  if (e.key ==  'Enter') {
    //UPDATES TODOS
    setTodos([
      {...formData,status:'PENDING'},
      ...todos
    ])
   //RESET FORM
    setFormData({
      title:"",
      description:""
    })
 
    
  }
}
//console.log(todos,formData);
const handleTodoChange = e => {
  let updatedTodos = [...todos];
  updatedTodos[e.target.id].status = e.target.checked ? 'DONE' : 'PENDING'
  //console.log(e.target.checked,e.target.id);
  setTodos(updatedTodos)
}
console.log(todos);



  return(
    <div>
      {
        todos.map((todo, idx) => {
          return(
            <div key={idx} className="todo-item">
            <input type="checkbox" id={idx} onChange={ handleTodoChange }></input>
            <div style={todo.status == 'DONE' ? {textDecoration:'line-through'}:null}>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              </div>
              </div>
          )
        })
      }
      <form>
        <div>
          <input type = "text" name="title" placeholder="title" value={formData.title} onChange={handleFormInput} onKeyDown={handleKeyDown}/>
          <input type = "text" name = "description" placeholder="description" value={formData.description} onChange={handleFormInput} onKeyDown={handleKeyDown}/>
        </div>
      </form>
      
    </div>
  )
}


export default App