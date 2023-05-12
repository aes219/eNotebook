import Navbar from "../components/Navbar"
import Notes from "../components/Notes"
import CreateNote from "../components/CreateNote"
import { useState } from "react"

export const Dashboard = () => {
    const [notes, setNotes] = useState([])
    const addNote = (note) => {
        setNotes([...notes, note])
    }

    return(
        <div>
            <Navbar/>
        <CreateNote onAddNote={addNote} notes={notes} setNotes={setNotes} />
        {notes.map((note, index) => (
          <Notes key={index} title={note.title} content={note.content} />
        ))}
      </div>
    )
}