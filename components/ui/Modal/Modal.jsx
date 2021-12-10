import { useRef, useCallback } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  const ref = useRef();

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  // useEffect(() => {
  //   if (ref.current) {
  //     disableBodyScroll(ref.current, { reserveScrollBarGap: true })
  //     window.addEventListener('keydown', handleKey)
  //   }
  //   return () => {
  //     if (ref && ref.current) {
  //       enableBodyScroll(ref.current)
  //     }
  //     clearAllBodyScrollLocks()
  //     window.removeEventListener('keydown', handleKey)
  //   }
  // }, [handleKey])

  return (
    <div className={s.root}>
      <div className={s.modal} role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className={s.close}
        > X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
