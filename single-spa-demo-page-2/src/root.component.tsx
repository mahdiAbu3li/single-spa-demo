import React, { useEffect, useState } from "react";
import "./root.component.css";
// @ts-ignore
import {subject as sub} from "@mahdi/api"
 export default function Root() {
   const [notes , setNotes] = useState([])
  //  const sub = useSharedNotes()
   useEffect(() => {
     console.log(sub , 1111111)
     if(sub){
      const subscription2 = sub.subscribe((notes) => {
      setNotes(notes);
    });
  }
  
   } , [])
  return (
    <>
    <div className="container2">
      <h1>React 2 App</h1>

      <p>list of notes</p>
<div className="listContainer">
    <ol>
    {notes && notes.map((note , index) => (
      
      <li key={index}>{note}</li>
     
    ))} 
    </ol> 
    </div></div>
    </>
  );
}