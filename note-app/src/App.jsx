import { useState, useEffect } from 'react'
import './App.css'
import NoteHeader from './component/NoteHeader'
import SideBar from './component/SideBar'
import NotePage from './component/NotePage'

function App() {

  const [noteList, setNoteList] = useState(()=>{
    const saved = localStorage.getItem("notes")
    return saved?JSON.parse(saved): []
  })
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(noteList))
  }, [noteList])

  return (
    <div className='flex h-screen'>
        <SideBar setNoteList={setNoteList} noteList={noteList} setActiveId={setActiveId} activeId={activeId} />
        <NotePage setNoteList={setNoteList} noteList={noteList} setActiveId={setActiveId} activeId={activeId} />
    </div>
  )
}

export default App
