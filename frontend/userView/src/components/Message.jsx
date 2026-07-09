export default function Message() {
  function handleclick() {
    console.log("hi you button works");
  }
  return (
    <div>
      <button onClick={handleclick}>
        click on this button to see the list{" "}
      </button>
    </div>
  );
}
