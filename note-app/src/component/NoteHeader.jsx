import React from 'react'
import Utility from './Utility'

export default function NoteHeader({noteList, setNoteList, setActiveId, activeId}) {
    return (
        <>
            {
                (!(noteList.length>0))?
                <h2 className='text-2xl text-center'>No Save note</h2>
                :
                noteList.map((note)=>(
                    <div key={note.id} onClick={()=> setActiveId(note.id)} className={`flex w-full py-2 px-0.5 justify-between text-white  ${activeId===note.id?"bg-slate-700":"bg-slate-600 hover:bg-slate-500"}`}>
                        <div>{note.title}</div>
                        <Utility currnote={note} noteList={noteList} setNoteList={setNoteList} />
                    </div>
                ))
            }
        </>
  )
}
