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
    // TODO_DONE islemi icin reducer yaziyoruz
    if(action.type === ActionTypes.CHANGE_TODO_DONE){
       var geciciDizi = [] 
        for(let i=0; i<state.todos.length; i++){
            if(state.todos[i].id === action.payload){
                var guncelTodo={
                    ...state.todos[i], // burada yaptigimiz state in icindeki o anki todoslarin hepsini al sadece hasDone i degistir
                    isDone:!state.todos[i].isDone
                }
                  geciciDizi.push(guncelTodo) //guncelTodo geciciDizi ye pushlanir
            }else{
                   geciciDizi.push(state.todos[i]) //state in icindeki o anki todos gecici diziye oushlanir
            }
        }
        return{ 
            todos:geciciDizi //yaptigimiz degisikligi state e yukluyoruz. State guncellenir
        }
    }
        // Guncelleme islemi icin reducer yaziyoruz
        if(action.type === ActionTypes.TODO_GUNCELLE){
            var geciciDizi = [] 
             for(let i=0; i<state.todos.length; i++){
                 if(state.todos[i].id === action.payload.id){
                    
                       geciciDizi.push(action.payload) //Burada dispatch islemi ile action.payload ettigimiz guncel todo vardir
                 }else{
                        geciciDizi.push(state.todos[i]) //state in icindeki o anki todos gecici diziye oushlanir
                 }
             }
             return{ 
                 todos:geciciDizi //yaptigimiz degisikligi state e yukluyoruz. State guncellenir
             }
    }
    return state
}

export default todosReducer