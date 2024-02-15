// 1. initial State olusturulur
// 2. todosReducer olusuturulur.
// 3. todosReducer iki parametre alir baslangic state i ve action
// 4. action type ina gore if blogu yazilir ve return edilir 
// (burada dikkat etmemiz gereken todo isleminde 3 kosul var Silme,Duzenleme ve Ekleme her biri icin ayri ayri if blogu yazmaliyiz)
// 5. return isleminde ...state.todos oldugu gibi alinir ve action icinde payload alinir
// 6. kosullarimiz uymuyorsa return state yapilir

const initialState = {
    todos:[],
}

const todosReducer = (state=initialState, action)=>{
    if(action.type=== "ADD_TODO"){
        return{
            todos:[...state.todos,action.payload]
        }
       
    }
    return state
}

export default todosReducer