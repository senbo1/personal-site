import Image from 'next/image';
import type { FC } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800 bg-opacity-50">
      <div className="bg-neutral-950 relative border border-green-600">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl font-bold">
          &times;
        </button>
        <p className='py-10 px-8'>No preview available for this song.</p>
      </div>
    </div>
  );
};

export default Modal;
