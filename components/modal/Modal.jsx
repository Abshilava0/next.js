import classes from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children, className }) {

  if (!isOpen) return null;
  return (
    <div className={classes.modalContainer} role="dialog" aria-modal="true">
      <div className={className}>
        {children}
        <div className={classes.buttons}>
          <button onClick={onClose} style={{ alignSelf: "flex-end" }}>Close</button>
          <button onClick={onClose} style={{ alignSelf: "flex-end" }}>Send</button>
        </div>
      </div>
    </div>
  );
}
