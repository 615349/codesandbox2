import useBoolean from "./useBoolean";

const App = () => {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  const style = {
    display: "block"
  };

  return (
    <div>
      <div>value:{String(value)}</div>
      <button style={style} onClick={setTrue}>
        Set true
      </button>
      <button style={style} onClick={setFalse}>
        Set false
      </button>
      <button style={style} onClick={toggle}>
        Toggle
      </button>
    </div>
  );
};

export default App;

