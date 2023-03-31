import React from "react";
import Modal from "react-modal";

interface Props {
    modalIsOpen: boolean;
    closeModal: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    certificateImage: string;
}

function CertificateModal({modalIsOpen, closeModal, certificateImage}: Props) {
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="text-right">
              <button
                className="text-sm font-light hover:underline"
                onClick={closeModal}
              >
                close
              </button>
            </div>
            <div>{certificateImage}</div>
          </Modal>
    )
}

export default CertificateModal;