import { createStore } from "redux";
import { reducer } from "./reducers";

const STORAGE_KEY = '__Web_Component_Test__';

const saveState = state => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : undefined;
};

export const store = createStore(
    reducer,
    loadState()
)

store.subscribe(() => {
    saveState(store.getState());
});