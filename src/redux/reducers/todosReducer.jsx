// 1. initial State olusturulur
// 2. todosReducer olusuturulur.
// 3. todosReducer iki parametre alir baslangic state i ve action
// 4. action type ina gore if blogu yazilir ve return edilir 
// (burada dikkat etmemiz gereken todo isleminde 3 kosul var Silme,Duzenleme ve Ekleme her biri icin ayri ayri if blogu yazmaliyiz)
// 5. return isleminde ...state.todos oldugu gibi alinir ve action icinde payload alinir
// 6. kosullarimiz uymuyorsa return state yapilir
import ActionTypes from "../actions/ActionTypes"

const initialState = {
    todos:[],
}

const todosReducer = (state=initialState, action)=>{
    if(action.type=== ActionTypes.TODO_EKLE){
        return{
            todos:[...state.todos,action.payload]
        }  
    }
    if(action.type===ActionTypes.TODO_SIL){
        const geciciDizi = state.todos.filter(item=>item.id !== action.payload) // Filter fonksiyonu  ile silme islemini gerceklestiriyoruz. Reducer icindeki bu if blogu silme islemini gerceklestiriyor. 
        return{
            todos:geciciDizi // Burada geciciDizi yi todos a esitliyoruz
        } // Bu silme islemini tetikleyebilmek icin dispatch islemi yapmamiz gerekir.
    }
    return state
}

export default todosReducer