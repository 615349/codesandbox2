export default function App() {
  const handleClickDiv1 = (e) => {
    // gets fired when click button1
    alert("div1 gets fired");
  };

  const handleClickDiv2 = (e) => {
    //not gets fired when click button2
    alert("div2 never gets fired");
  };

  const handleClickBtn1 = (e) => {
    e.preventDefault();
  };

  const handleClickBtn2 = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <div onClick={handleClickDiv1}>
        <button onClick={handleClickBtn1}>button1</button>
      </div>
      <div onClick={handleClickDiv2} style={{ marginTop: 20 }}>
        <button onClick={handleClickBtn2}>button2</button>
      </div>
    </div>
  );
}
