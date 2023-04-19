const Notes = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Nothing here yet...</h1>
        <p className="py-6">You don't have any notes yet, start by clicking below! ↓</p>
        <label className="btn gap-2 btn-warning" for="my-modal-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d2800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          New Note
        </label>
      </div>
    </div>
  </div>
    )
}

export default Notes