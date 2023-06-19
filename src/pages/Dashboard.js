import Navbar from "../components/Navbar"
import Note from "../components/Note"
import CreateNote from "../components/CreateNote"
import { useState } from "react"

export const Dashboard = () => {
    return(
        <div>
            <Navbar/>
          <Note />
      </div>
    )
}