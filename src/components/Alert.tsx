interface Props {
  visible: boolean;
  onClose: () => void;
}

function Alert({ onClose }: Props) {
  return (
    <div
      className="alert alert-primary alert-dismissible"
      onClick={onClose}
      role="alert"
    >
      Something Alert!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
