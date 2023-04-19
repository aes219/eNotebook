import Navbar from "../components/Navbar"
import Notes from "../components/Notes"
import CreateNote from "../components/CreateNote"

export const Dashboard = () => {
    return(
        <div>
            <Navbar/>
            <Notes/>
            <CreateNote/>
        </div>
    )
}