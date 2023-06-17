import "./frame-component.css";
const FrameComponent = () => {
  return (
    <div className="use-dummy-text-in-whole-ui-parent">
      <div className="use-dummy-text">{`Use Dummy text in whole UI `}</div>
      <div className="lorem-ipsum-dolor">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default FrameComponent;
