import { AiOutlineClose } from "react-icons/ai";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { isOpen, closeModal, children } = props;
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    closeModal();
  };

  return (
    <div onPointerDown={() => handleClose()} className={styles.container}>
      <div className={styles.modal} onPointerDown={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Solution</h2>
          <AiOutlineClose onClick={() => handleClose()} />
        </div>
        <div className={styles.modal__form}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
