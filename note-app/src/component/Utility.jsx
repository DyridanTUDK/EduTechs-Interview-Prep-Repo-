import React, { createRef } from 'react'
import { Trash } from 'lucide-react';

export default function Utility({currnote, noteList, setNoteList}) {
    const deleteNote = () =>{
        const updatedNoteList = noteList.filter((note)=> note.id !== currnote.id)
        setNoteList(updatedNoteList)
    }
    return (
        <button onClick={deleteNote}>
            <Trash/>
        </button>
  )
}
