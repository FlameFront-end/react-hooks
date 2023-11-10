import { useToggle } from "../hooks/useToggle";

const Toggle = () => {
  const [visible, toggleVisible] = useToggle(true);

  return (
    <>
      <button onClick={toggleVisible}>Toggle</button>
      {visible && <div>content</div>}
    </>
  );
};

export default Toggle;
