import React from "react";
import ActionTypes from "../redux/actions/ActionTypes";
//silme isleminin gerceklestirilmesi icin dispatch ile reducer fonksiyonunu tetiklememiz gerekir
import { useDispatch } from "react-redux";
//Listeleme yapabilmek icin store a subscribe olmamiz gerek. Bunun icin useSelector kullanacagiz
import { useSelector } from "react-redux";

const ListTodos = () => {
  const dispatch = useDispatch();
  //Subscribe olduktan sonra statimize ulasiyoruz ve todolarimizi asagidaki gibi mapliyoruz
  const uygulamaState = useSelector((state) => state);

  return (
    <div>
      {uygulamaState.todosState.todos.length === 0 && (
        <>
          <p>Henuz gecerli bir todo yoktur</p>
        </>
      )}
      {uygulamaState.todosState.todos.length > 0 && (
        <>
          {uygulamaState.todosState.todos.map((todo) => (
            <div>
              <h1>{todo.text}</h1>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: ActionTypes.TODO_SIL, payload: todo.id }) //dispatch islemi yapilarak reducer tetiklenir
                  }
                >
                  Sil
                </button>
              </div>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
