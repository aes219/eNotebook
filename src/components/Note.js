import { useEffect, useState } from "react";

const Card = ({ title, content }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Note = () => {
  const [listing, setListing] = useState([
    {
      title: "Nothing here yet...",
      content: "Start by creating a new note!"
    }
  ])
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
          <div className="join-item">
        <Card title={a.title} content={a.content}></Card>
        </div>
      ))}
      
    </div>
  );
};

export default Note

