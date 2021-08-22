import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { localStorageMiddleware } from "./localStorageMiddleware";
export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middleWare = [thunkMiddleware, localStorageMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWare);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
