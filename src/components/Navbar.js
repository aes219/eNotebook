const Navbar = () => {
  const { useNavigate } = require('react-router-dom')
  const direct = useNavigate()
  const navigate = () => {
    window.localStorage.setItem("717l3", "")
    window.localStorage.setItem("c0n73n7", "")
    direct('/createNote')
  }

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl no-animation" href="/">eNotebook</a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end space-x-4 pr-3">
        <label className="btn gap-2 btn-warning" htmlFor="my-modal-3" onClick={navigate}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d2800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          New Note
        </label>
      </div>
    </div>
  )
}

export default Navbar