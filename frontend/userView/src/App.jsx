import Greet from "./components/Greet.jsx";

// function App() {

//   return (
//     <>
//     {/* <p>hello</p> */}
//     <Greet></Greet>
//     {/* <h1>Hii this is arpit</h1> */}
//     </>
//   )
// }

//how to pass value to other componets
// function App() {
import Fruit from "./components/Fruit.jsx";
function App() {
  const person = [
    {
      name: "Arpit",
      message: "Hi there!",
      emoji: "😙",
      guesIt: [1, 5, 8, 9, 3],
    },
    {
      name: "akshu",
      message: "yo yo !",
      emoji: "😓",
      guesIt: [1, 5, 8, 9, 3],
    },
  ];
  return (
    <>
      <Fruit />
      {person.map((value, index) => {
        return (
          <Greet
            message={value.message}
            name={value.name}
            emoji={value.emoji}
          />
        );
      })}
    </>
  );
}
export default App;
