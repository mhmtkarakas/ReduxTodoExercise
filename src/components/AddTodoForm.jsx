import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    
    const handleSubmit=(e)=>{
        e.preventDefault()

        if(text===""){
            alert("Input bos olamaz")
        }
        const newTodo ={
            id:String(new Date().getTime()),
            text:text,
            isDone:false,
            date:new Date()
        }
        dispatch({type:"ADD_TODO",payload:newTodo});
        setText("")
    }

  return (
   <form onSubmit={handleSubmit}>
    <input style={{marginTop:"25px",width:"50%",height:"30px"}} value={text} onChange={(event)=>setText(event.target.value)}/>
    <button style={{height:"35px",width:"50px"}} type="submit">Ekle</button>
   </form>
  )
}

export default AddTodoForm
