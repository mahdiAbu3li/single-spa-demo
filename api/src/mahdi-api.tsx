// Anything exported from this file is importable by other in-browser modules.
// export function publicApiFunction() {
//     console.log("hi there im an api from utility module")
// }




// import { useState, useEffect } from "react";
// import { BehaviorSubject } from "rxjs";

// let subject = null;

// export const getNotes = () => {
//   if (!subject) {
//     return undefined;
//   }
//   return subject.value;
// };

// export  function useSharedNotes () {
//     const [notes, setNotes] = useState([]);

//   if (!subject) {
//     subject = new BehaviorSubject([]);
//   }

//   useEffect(() => {
//     const subscription = subject.subscribe((notes) => {
//       setNotes(notes);
//     });
 
//     return () => {
//       if (subscription) {
//         subscription.unsubscribe();
//       }
//     };
//   }, []);

//   function addNote(newNote) {
//     subject.next([...notes, newNote]);
//   }

//   function clear() {
//       console.log("clwararrrrr")
//     subject.next([]);
// }

// return { addNote, clear, notes , subject };
// };

// export const clearA = () => {
    
//     subject.next([]);
// }
    



import { BehaviorSubject } from "rxjs";

export let subject = new BehaviorSubject([]);

let notes = []

// export const getNotes = () => { 
//   return notes
// }


    const subscription = subject.subscribe((notesa) => {
    notes = notesa;
    })
    

  export function addNote(newNote) {
    if (!subject) {
      subject = new BehaviorSubject([]);
    }
    subject.next([...notes, newNote]);
  }

  export function clearA() {
    subject.next([]);
}

    