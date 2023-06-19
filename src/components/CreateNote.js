import { useState } from "react"

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      await fetch(`https://sheetdb.io/api/v1/5r7n7vrrrer7w`, {
        method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          body: JSON.stringify(
            [
              {
                title: title,
                content: content
              }
            ]
          )
      })
      .then((res) => {
      console.warn(res);
        window.location = "/dash"
    })
    }
  }
  return (

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
              type="text"
              value={title}
              placeholder="Type here"
              className="input input-bordered"
              id="notetitle"
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
              placeholder="Type here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="textarea textarea-bordered textarea-lg w-full"
              id="notecontent"
            />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning btn-outline no-animation">Create Note</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>


/*
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-ghost absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Create a New Note</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              placeholder="Type here"
              className="input input-bordered"
              id="notetitle"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              placeholder="Type here"
              value={content}
              onChange={(e) => setTitle(e.target.value)}
              className="textarea textarea-bordered textarea-lg w-full"
              id="notecontent"
            />
          </div>
          <div className="htmlForm-control mt-6">
            <button className="btn btn-outline btn-warning no-animation" id="addnote" type="submit">Add Note</button>
          </div>
        </form>
      </div>
    </div>
    */
  )
}

export default CreateNote