import { combineReducers, createStore } from "redux"
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStirage";

const rootReducer = combineReducers({
    counter: counterReducer })


export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
  localStorage.setItem('appState', JSON.stringify(store.getState()))
})