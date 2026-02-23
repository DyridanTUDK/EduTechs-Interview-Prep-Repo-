import React from 'react'
import NoteHeader from './NoteHeader'

export default function SideBar({noteList, setNoteList, activeId, setActiveId}) {
  return (
    <div className='py-2 w-72 h-screen bg-slate-400 text-white shadow-2xl'>
        <h1 className='text-center font-bold'>Note List:</h1>
        <NoteHeader setNoteList={setNoteList} noteList={noteList} setActiveId={setActiveId} activeId={activeId} />
    </div>
  )
}
