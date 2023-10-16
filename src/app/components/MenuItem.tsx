import "remixicon/fonts/remixicon.css";

const MenuItem = ({ icon, title, action, isActive = null }) => {
  return (
    <button
      className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
      onClick={action}
      title={title}
    >
      <i className={`ri-${icon}`}></i>
    </button>
  );
};

export default MenuItem;
