const Modal = ({ title, content }) => {
    return (
        <div>
            <input type="checkbox" id="my_modal_6" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my_modal_6" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{title}</h3>
                    <p class="py-4">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal