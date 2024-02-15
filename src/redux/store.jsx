// Store olusturulurken react icinde bizim ihtiyac duydugumuz seyler var
// 1. createStore ve combineReducers redux tan import edilir
// 2. reducerlari combine edip tek bir store olarak stora yuklememiz gerek
// 3. Bunun icin yeni bir reducer olusturulur buna da rootReducer denir
// 4. combineReducers rootReducer icine atmak icin gereken islem yapilir
// 5. todosState:todosReducer her bir state in bir reducer mihmandari vardir
// 6. store olusturulur createStore icine rootReducer eklenerek stora esitlenir
// 7. store baska bir yerde kullanilmak uzere export edilir.
// 8. react uygulamamizin bundan haberi yok bunun icin index.jss de app komponenti provider ile sarilir

import { createStore,combineReducers } from "redux";
import todosReducer from "./reducers/todosReducer";

const rootReducer = combineReducers({
    todosState:todosReducer
})

const store = createStore(rootReducer)

export default store