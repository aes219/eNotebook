import { useEffect, useState } from "react";
import Card from "./Card";

const Note = () => {
  const [listing, setListing] = useState([]);

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
    <div className="items-center">
      {listing.map((a) => (
        <div style={{ margin: '20px' }}>
          <button>
            <Card
            title={(a.title)?a.title:'Nothing here yet...'}
            content={(a.content)?a.content:'Start by creating a new note, check above!'}
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
          </button>
        </div>
      ))}
    </div>
  );
};

export default Note;