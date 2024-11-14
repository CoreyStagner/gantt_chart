import { Box, Modal as BaseModal } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';

export default function Modal({ options, handleOpenChange }) {
  const [isServer, setIsServer] = useState(true);
  const [isOpen, setIsOpen] = useState(options?.isOpen || false);
  const [modalID, setModalID] = useState(options?.modalID || undefined);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  // Set a effect to listen if options has changed so it will re render this component.
  useEffect(() => {
    setIsOpen(options?.isOpen || false);
    setModalID(options?.modalID || undefined);
  }, [options]);

  useEffect(() => {
    if (!isOpen) {
      document.addEventListener('keydown', handleKeyPress);
    }
  }, [handleKeyPress, isOpen]);

  useEffect(() => {
    if (handleOpenChange && handleOpenChange instanceof Function) {
      handleOpenChange({ show: isOpen });
    }
    return () => {
      window.removeEventListener('keydown', handleOpenChange);
    };
  }, [isOpen, handleOpenChange]);

  return (
    <BaseModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <div className="modal-header">Text in a modal</div>
        <div className="modal-body">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </div>
      </Box>
    </BaseModal>
  );
}
