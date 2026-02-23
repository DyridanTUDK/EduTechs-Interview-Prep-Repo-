import React, { useState, useEffect } from 'react'
import { SquareArrowRight } from 'lucide-react';

export default function NotePage({noteList, setNoteList, activeId, setActiveId}) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const activeNote = noteList.find(note=> note.id===activeId)
    
    useEffect(() => {
    if (activeId) {
        const note = noteList.find(n => n.id === activeId)
        if (note) {
        setTitle(note.title)
        setText(note.text)
        }
    } else {
        setTitle("")
        setText("")
    }
    }, [activeId, noteList])

   const saveNote = () => {

        if (!title.trim() && !text.trim()) return

        if (activeId) {
            setNoteList(prev =>
            prev.map(note =>
                note.id === activeId
                ? { ...note, title, text }
                : note
            )
            )
            setActiveId(null)
        } else {
            const newNode = {
            id: crypto.randomUUID(),
            title,
            text,
            }

            setNoteList(prev => [...prev, newNode])
            setActiveId(newNode.id)
        }

        if (!activeId) {
        setTitle("")
        setText("")
        }
    }
  return (
            <div className="flex-1 p-6 bg-slate-100 h-screen">
            <h1 className='text-center text-2xl font-bold py-2'>
            My React Notes
            </h1>

        <div className="title mb-4 flex">
            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-2xl"
            />


            <button onClick={saveNote}>
            <SquareArrowRight size={45}/>
            </button>
        </div>

        <div className="page h-[80%]">
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-full p-2 border rounded"
            />
        </div>
        </div>
  )
}
