import React, {useState} from "react";
import Card from "./components/Card";


function App() {

  const[thoughts, setThoughts] = useState([]);
  const[currentThought, setCurrentThought] = useState('')
  const[editing, setEditing] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null);

// 
  const handleChange = (event) => {
    setCurrentThought(event.target.value);
  }
//  
  const handleSubmit = (event) =>{
    event.preventDefault();

    if(currentThought !== '')
    {setThoughts([...thoughts, currentThought])
    setCurrentThought('')}
  }
//
  const handleDelete = (indexToDelete) =>{
    setThoughts(prev => prev.filter((_, index) => index !== indexToDelete))
  }
//
  const handleEdit = (indexToEdit) =>{
    setEditing(true)
    setEditingIndex(indexToEdit)
    setCurrentThought(thoughts[indexToEdit])
  }
  //
  const saveEdit =(indexToReplace)=>{
    setThoughts(prev =>
      prev.map((thought, index) =>
        index === indexToReplace ? currentThought : thought
      )
    );
    setCurrentThought('');
    setEditing(false); 
    setEditingIndex(null)
  }

  

  return (
    <div className="app-container">
      {/* <header>Write!</header> */}
      <form onSubmit={handleSubmit} className="thought-form">
        <label><h1>Write!</h1></label>
        <textarea value = {currentThought} onChange={handleChange} placeholder="Write your thoughts here"></textarea>
        <button className="button-main" type="submit" >Post!</button>
        {editing ? (
          <button className="button-main" onClick={()=>saveEdit(editingIndex)}>Save</button>
        ): null}   
      </form>

      <div className="thought-column">
      {thoughts.map((thought,index) => (
        <Card key={index} thoughts={thought} num={index + 1} handleDelete={()=>handleDelete(index)} handleEdit={() => handleEdit(index)}/>
      ))}
      </div>
    </div>
  );
}

export default App;
