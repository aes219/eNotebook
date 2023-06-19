import { useEffect, useState } from "react";
import Card from "./Card";
import {Modal, Button} from 'react-daisyui'

const Note = () => {
  const [listing, setListing] = useState([])
  const [visible, setVisible] = useState(false)
  const [currentNote, setCurrentNote] = useState(null)
  const toggleVisible = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    const fetchData = async() => {
      const data = await fetch(`https://sheetdb.io/api/v1/5r7n7vrrrer7w`);
      const notes = await data.json();
      setListing(notes)
    }
    fetchData()
  }, [])

  return (
    <div className="join join-vertical lg:join-horizontal">
    
        {listing.map((a) => (
          <div className="join-item" style={{margin: '20px'}}>
            <button onClick={() => {
              setCurrentNote(a);
              setVisible(true);
            }}>
        <Card title ={(a.title) ? a.title : 'Nothing here yet...'} content={(a.content) ? "" : 'Start by creating a new note...'}></Card>
            </button>
            <Modal open={visible}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        <Modal.Header className="font-bold">
          {currentNote?.title}
        </Modal.Header>

        <Modal.Body>
          {currentNote?.content}
        </Modal.Body>
      </Modal>
        </div>
      ))}
    </div>
  );
};

export default Note
