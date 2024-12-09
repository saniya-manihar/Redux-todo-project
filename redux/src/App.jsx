import React from "react";
import { Provider } from "react-redux";
import store from "./app/store"; 
import Todo from "./component/todo";
import "./App.css"

const App = () => (
    
  <Provider store={store}>
    <Todo/>
  </Provider>
);

export default App;
