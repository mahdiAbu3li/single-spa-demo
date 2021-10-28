import React, { useState } from "react";
import "./root.component.css";
import { Subject } from 'rxjs';

// @ts-ignore
import {addNote} from '@mahdi/api'

export default function Root() {
  const [note , setNote ] = useState("")
  // const { addNote } = useSharedNotes();
  const onAdd = () => {
    addNote(note);
    setNote("")
  }
  // const subject = new Subject();
  
  return (
    <div className="container1">
      <h1>React 1 App</h1>
      <div className="form">
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
        <button type="submit" onClick={() => onAdd()}>add</button>
      </div>
    </div>
  );
}