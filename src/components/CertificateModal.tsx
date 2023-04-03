import React from "react";
import Modal from "react-modal";

interface Props {
    modalIsOpen: boolean;
    closeModal: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    certificateImage: string;
}

function CertificateModal({modalIsOpen, closeModal, certificateImage}: Props) {
    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#D2D6DC dark:#4a5568',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '24px',
            outline: 'none',
            padding: '20px',
          }
        }} className="bg-gray-300 dark:bg-gray-700 shadow-lg">
            <div className="text-right">
              <button
                className="text-sm font-light hover:underline mb-5"
                onClick={closeModal}
              >
                close
              </button>
            </div>
            <div><img src={certificateImage} alt="certificate" /></div>
          </Modal>
    )
}

export default CertificateModal;