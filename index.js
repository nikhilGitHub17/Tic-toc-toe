import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Age } from "./context/GlobalContext";
// let root1=ReactDom.createRoot(document.getElementById("root"))
// root1.render("hiii")
// ReactDom.createRoot(document.getElementById("root")).render("i am displaying throughout react again")
//  ReactDom.createRoot(document.getElementById("root")).render(<h1>good</h1>)
ReactDom.createRoot(document.getElementById("root")).render(
<Age.Provider value={20}>
<App/>
</Age.Provider>)
