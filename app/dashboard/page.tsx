'use client'

import NoteCard from "@/components/note";
import { DialogOpen } from "@/components/note-dialog";
import { useEffect, useState } from "react";

type Note = {
    id: string;
    title: string;
    desc: string;
};

export default function Dashboard() {
    const [ notes, setNotes ] = useState<Note[]>([]);
    const [ loading , setLoading ] = useState(true);

    useEffect( () => {
        async function fetchNotes() {
            try{
                const res = await fetch("api/notes")
                const data = await res.json();
                setNotes(data)
            }catch(error){
                console.error("Failed to fetch Notes", error)
                setNotes([])
            } finally {
                setLoading(false)
            }
        }
        fetchNotes();
    }, [])

  return (
    <>
      <DialogOpen/>
      <div className="grid grid-cols-4 gap-6 m-20">
        {notes.map((note) => (
            <NoteCard key={note.id} title={note.title} description={note.desc} />
        ))}
      </div>
    </>
  );
}
