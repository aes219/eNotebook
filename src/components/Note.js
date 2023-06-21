import { useEffect, useState } from "react";
import Card from "./Card";

const Note = () => {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const notes = window.localStorage.getItem('notes');
    if (Array.isArray(JSON.parse(notes))) {
      setListing(JSON.parse(notes));
    } else {
      setListing([]);
    }
  }, []);

  return (
    <div className="items-center">
      {listing.map((a) => (
        <div style={{margin: '20px'}}>
          <button>
            <Card title={a.title} content={a.content}></Card>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Note;