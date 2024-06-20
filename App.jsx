// import react from "react";
// import Counter from './Counter/Counter';
// import AppJSX from "./JSX/AppJSX";
// import ParentProps from "./Props/ParentProps";
// class App extends react.Component{
//     render()
//     {
//         let a="nikhil";
//         let b="hyd"
//             console.dir(this)
//         return(
//             <>
//             <h1 >my name is {a} and i am from {b}</h1>
//             <p ><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta?</i></p>
//             <h3>{2}+{5}</h3>
//             <label htmlFor="label"><b>Enter the name :</b></label>
//             <input type="text" name="" id="label" />
//             </>
//     )
    
            
//     }
// }

// const App=()=>{
//     return  <h1 ><i><mark>function based component</mark></i></h1>
// }
// import React from 'react'
// // import State from "./state/State";

// function App() {
//   return (
//     <ParentProps/>
//   )
// }

// export default App

// import React from 'react'

// import Parent from './Props/PropsDrillling/Parent';
// const App = () => {
//   return (
//     <Parent/>
//   )
// }

// export default App
// import React from 'react'
// import Parent from './context/Parent';
// import { Bio, Details, Fun } from './context/GlobalContext';
// import BioData from './context/BioData';

// const App = () => {
//   let greet=()=>
//   {
//     console.log("good morning ")
//   }
//   let obj={
//     name:"Nikihl",
//     age:22,
//     salary:50000.00,
//     girlfriends:["Kajal","Anushka","Srileela","KritiSanan"]
//   }
//   return (
    
//     <Details.Provider value="Nikhil Reddy">
//       <Fun.Provider value={greet}>
//         <Bio.Provider value={obj}>
//     <Parent />
//     <BioData/>
//     </Bio.Provider>
//     </Fun.Provider>
//     </Details.Provider>
    
//   )
// }

// export default App
// import React from 'react'
// import Layout from './ModuleCss/Layout'

// const App = () => {
//   return (
//    <Layout/>
//   )
// }

// export default App

// import React from 'react'
// import CRendering from './CRendering';

// const App = () => {
//   return (
//     <>
//     <CRendering/>
//     </>
//   )
// }

//  export default App


// import React from 'react'
// import UncontrolledForms from './Forms/UncontrolledForms/UncontrolledForms'

// const App = () => {
//   return (
//     <>
//     <UncontrolledForms/>
//     </>
//   )
// }

// export default App

//!controlled form
// import React from 'react'
// import ControlledForm from './Forms/ControlledForms/ControlledForm'
// import LifeCycle from './LifeCyclePhases/LifeCycle'

// const App = () => {
//   return (
//     <>
//     <LifeCycle/>
//     </>
//   )
// }

// export default App

//!error boundary phase

// import React from 'react'
// import Names from './LifeCyclePhases/Names';
// import ErrorBoundary from './LifeCyclePhases/ErrorBoundary';

// const App = () => {
//   return (
//     <>
//     <ErrorBoundary>
//       <Names val="nikhil"/>
//       </ErrorBoundary>
//        <ErrorBoundary>
//       <Names val="karthik"/>
//       </ErrorBoundary>
//        <ErrorBoundary>
//       <Names val="deekshith"/>
//     </ErrorBoundary>
//     </>
//   )
// }

// export default App

//!useEffcet
// import React from 'react'
// import UseEffect from './LifeCyclePhases/UseEffect'

// const App = () => {
//   return (
//     <>
//     <UseEffect/>
//     </>
//   )
// }

// export default 
// import React from 'react'
// import ParentHoc from './HighorderComponents/ParentHoc';

// const App = () => {
//   return (
//     <><ParentHoc/></>
//   )
// }

// export default App

// import React from 'react'
// import Axios from './Axios/Axios'

// const App = () => {
//   return (
//     <><Axios/></>
//   )
// }

// export default App
//!Portals
// import React from 'react'
// import Portal from './Portal/Portal'
// import './Portal/Global.css'
// import RegularComponent from './Pure Components/RegularComponent'
// import PureComponent1 from './Pure Components/PureComponent1'


// const App = () => {
//   return (
//     <>
//     <RegularComponent></RegularComponent>
//     <PureComponent1></PureComponent1>
//     </>
//   )
// }

// export default App
// //!Memo and Pure Components in functions and classes
// import React, { useState } from 'react'

// import Normal from './Memo Component/Normal';
// import MemoComponent from './Memo Component/MemoComponent';

// const App = () => {
//   let [data,setData]=useState({
//     name:"Nikhil"
//   })
//   let handleData=()=>{
//     setData({name:"Nikhil"})
//   }
//   return (
//     <>
//     <MemoComponent val={data.name}/>
//       <Normal val={data.name}/>
//       <br />
//       <button onClick={handleData}>click to change</button>
//     </>
//   )
// }

// export default App
//!callBack function
// import React from 'react'
// import CallBackParent from './CallBackFunction/CallBackParent';

// const App = () => {
//   return (
//     <><CallBackParent/></>
//   )
// }

// export default App
//!Router
// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './Router/About';

// import Profile from './Router/Profile';
// import Contact from './Router/Contact';
// import "./Portal/Global.css"
// import Home from './Router/Home';

// import UpdateProfile from './Router/UpdateProfile';
// import DeleteProfile from './Router/DeleteProfile';
// import MainProfile from './Router/MainProfile';

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/About' element={<About/>}></Route>
//       <Route path='/Profile' element={<MainProfile/>}>
//         <Route path='/Profile' element={<Profile/>}/>
//         <Route path='/Profile/UpdateProfile' element={<UpdateProfile/>}/>
//         <Route path='/Profile/DeleteProfile' element={<DeleteProfile/>}/>
//       </Route>
//       <Route path='/Contact' element={<Contact/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// import React from 'react'
// import ToDo from './ToDoApp/ToDo';

// const App = () => {
//   return (
//     <><ToDo/></>
//   )
// }

// export default App

//!project-2
// import React from 'react'
// import {  RouterProvider,createBrowserRouter } from 'react-router-dom'

// import Read from './Crud/Read'
// import Delete from './Crud/Delete'
// import Edit from './Crud/Edit'
// import PageNotFound from './Crud/PageNotFound'
// import Home from './Crud/Home';
// import Create from './Crud/Create'

// let route=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/Create",
//     element:<Create/>
//   },
//   {
//     path:`/Read/:id`,
//     element:<Read/>
//   },
//   {
//     path:"/Delete",
//     element:<Delete/>
//   },
//   {
//     path:`/Edit/:id`,
//     element:<Edit/>
//   },
//   {
//     path:"*",
//     element:<PageNotFound/>
//   }
// ])
// const App = () => {
//   return (
//     <>
   
//     <RouterProvider router={route}/>
    
//     </>
//   )
// }

// export default App
import React from 'react'
import TicToc from './Tic-toc-toe/TicToc'

const App = () => {
  return (
    <div><TicToc/></div>
  )
}

export default App