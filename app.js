
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




   const AppLay=()=>{
    return(
        <div className="app-Layout">
            <Header/>
            <Body/>
        </div>
    )
   }


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLay/>);
