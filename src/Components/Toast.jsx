// src/components/ToastSuccess.js
import React, { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

const ToastSuccess = ({ show, onClose, message }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show && toastRef.current) {
      const toast = new Toast(toastRef.current);
      toast.show();
      toastRef.current.addEventListener("hidden.bs.toast", onClose);
    }
  }, [show, onClose]);

  return (
    <div
      className="toast-container position-fixed top-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={toastRef}
        className="toast align-items-center text-bg-success border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ToastSuccess;
