const Modal = ({ title, content }) => {
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4" dangerouslySetInnerHTML={{__html: content}}/>
                </div>
            </div>
        </div>
    )
}

export default Modal