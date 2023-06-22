import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      const newNote = {
        title,
        content,
        id: Math.random().toString(36).substring(7),
      };
      const notes = window.localStorage.getItem('notes');
      const parsed = notes ? JSON.parse(notes) : [];
      parsed.push(newNote);
      console.log(`${parsed}`)
      window.localStorage.setItem('notes', JSON.stringify(parsed));
      window.location = "/dash";
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
  );
};

export default CreateNote;
