import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from './Modal';

const Note = () => {
  const [listing, setListing] = useState([])
  const [currentNote, setCurrentNote] = useState(null)
  const [cursor, setCursor] = useState("default")

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

  return (
    <div className="items-center flex flex-wrap justify-around h-min">
      {listing.map((a) => (
        <div>
          <button>
            <label
              htmlFor="my_modal_6" onClick={() => { setCurrentNote(a) }}
              style={{ cursor: cursor }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Card
                title={a.title}
                deleteNote={() => {
                  const newListing = listing.filter((note) => note !== a);
                  setListing(newListing);
                  window.localStorage.setItem('notes', JSON.stringify(newListing));
                }}
                editNote={() => {
                  window.localStorage.setItem("717l3", a.title);
                  window.localStorage.setItem("c0n73n7", a.content);
                  window.location = '/createnote'
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
  );
};

export default Note;