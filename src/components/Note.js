import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from './Modal';

const Note = () => {
  const { useNavigate } = require('react-router-dom')
  const direct = useNavigate()
  const [listing, setListing] = useState([])
  const [currentNote, setCurrentNote] = useState(null)
  const [cursor, setCursor] = useState("default")

  const navigate = () => {
    window.localStorage.setItem("717l3", "")
    window.localStorage.setItem("c0n73n7", "")
    direct('/createNote')
  }

  const handleMouseOver = () => {
    setCursor("pointer");
  };

  const handleMouseOut = () => {
    setCursor("default");
  };

  useEffect(() => {
    const notes = window.localStorage.getItem('notes');
    if (notes) {
      const noteObjects = JSON.parse(notes);
      setListing(noteObjects);
    } else {
      setListing([]);
    }
  }, []);
  
  if(window.localStorage.getItem('notes') === "[]") {
    return (
      <>
      <div class="hero bg-base-200 h-screen -mt-16">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Nothing here yet...</h1>
      <p class="py-6">Get started by clicking below!</p>
      <label className="btn gap-2 btn-warning" htmlFor="my-modal-3" onClick={navigate}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d2800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          New Note
        </label>
    </div>
  </div>
</div>
      </>
    )
  } else {
  return (
    <>
      <div className="ml-8 grid grid-cols-3 gap-4">
        {listing.map((a) => (
          <div>
            <button>
              <label
                htmlFor="my_modal_6"
                onClick={() => { setCurrentNote(a) }}
                style={{ cursor: cursor }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Card
                  title={a.title}
                  deleteNote={() => {
                    const newListing = listing.filter((note) => note !== a);
                    setListing(newListing);
                    window.localStorage.setItem('notes', JSON.stringify(newListing))
                    window.location.reload()
                  }}
                  editNote={() => {
                    window.localStorage.setItem("717l3", a.title);
                    window.localStorage.setItem("c0n73n7", a.content);
                    direct('/createnote')
                    const newListing = listing.filter((note) => note !== a);
                    setListing(newListing);
                    window.localStorage.setItem('notes', JSON.stringify(newListing));
                  }}
                >
                </Card>
              </label>
            </button>
            <Modal title={currentNote?.title} content={currentNote?.content} />
          </div>
        ))}
      </div>
    </>
  )
}
}

export default Note
