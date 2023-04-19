const CreateNote = () => {
    return(
        <div className="modal">
          <div className="modal-box relative">
            <label for="my-modal-3" className="btn btn-sm btn-ghost absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Create a New Note</h3>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" placeholder="Type here" className="input input-bordered" id="notetitle" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea placeholder="Type here" className="textarea textarea-bordered textarea-lg w-full" id="notecontent"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline btn-warning no-animation" id="addnote">Add Note</button>
                </div>
          </div>
        </div>
    )
}

export default CreateNote