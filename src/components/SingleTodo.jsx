import React, { useState } from "react";
//silme isleminin gerceklestirilmesi icin dispatch ile reducer fonksiyonunu tetiklememiz gerekir
import { useDispatch } from "react-redux";
import ActionTypes from "../redux/actions/ActionTypes";

const SingleTodo = ({ todo }) => {
  //Guncelleme yapmak icin bir state e ihtiyacimiz var
  const [editTodo, setEditTodo] = useState(false);
  // inputumuzun texti icin bir state e ihtiyacimiz var
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit=(e)=>{
    e.preventDefault();
    // Validation
    if(editText === ""){
        alert("input bos olamaz")
    }
    // guncelledigimiz todo yu yaziyoruz
    var edittedTodo ={ 
        ...todo,
        text:editText
    }
    dispatch({type:ActionTypes.TODO_GUNCELLE,payload:edittedTodo}) // guncelledigimiz todo yu dispatch edip reducer a yolluyoruz.
    setEditTodo(false);
  }
  return (
    <div>

      <h1
        style={{
          textDecoration: todo.isDone ? "line-through" : "none",
          color: todo.isDone ? "orangered" : "black",
        }} //Burada isDone in degisimine textimizin style islemlerini yapiyoruz
      >
        {todo.text}
      </h1>
      {editTodo && (
        <form style={{margin:"10px"}} onSubmit={handleEdit}>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={() => {
              setEditTodo(false);
              setEditText(todo.text);
            }
        }
            type="button"
          >
            Vazgec
          </button>

          <button type="submit">Kaydet</button>
        </form>
      )}
      <div>
        <button
          onClick={
            () => dispatch({ type: ActionTypes.TODO_SIL, payload: todo.id }) //dispatch islemi yapilarak reducer tetiklenir
          }
        >
          Sil
        </button>
        <button
          onClick={
            () =>
              dispatch({
                type: ActionTypes.CHANGE_TODO_DONE,
                payload: todo.id,
              }) //dispatch islemi yapilarak reducer tetiklenir
          }
        >
          {todo.isDone ? "Yapilmadi" : "Yapildi"}
        </button>
        <button onClick={() => setEditTodo(true)}>Guncelle</button>
      </div>
      <hr />
    </div>
  );
};

export default SingleTodo;
