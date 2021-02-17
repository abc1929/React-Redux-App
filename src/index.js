import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
   <ChakraProvider>
      <BrowserRouter>
         <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
            <React.StrictMode>
               <App />
            </React.StrictMode>
         </Provider>
      </BrowserRouter>
   </ChakraProvider>,

   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
