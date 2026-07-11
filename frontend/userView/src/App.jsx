// import Counter from "./components/counter";
// import Form from "./components/Form";
// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }
// export default App;
// import Greet from "./components/Greet.jsx";

// // function App() {

// //   return (
// //     <>
// //     {/* <p>hello</p> */}
// //     <Greet></Greet>
// //     {/* <h1>Hii this is arpit</h1> */}
// //     </>
// //   )
// // }

// //how to pass value to other componets
// // function App() {
// import Fruit from "./components/Fruit.jsx";
// import Conditional from "./components/Conditional.jsx";
// import Message from "./components/Message.jsx";
// function App() {
//   const person = [
//     {
//       name: "Arpit",
//       message: "Hi there!",
//       emoji: "😙",
//       guesIt: [1, 5, 8, 9, 3],
//     },
//     {
//       name: "akshu",
//       message: "yo yo !",
//       emoji: "😓",
//       guesIt: [1, 5, 8, 9, 3],
//     },
//   ];
//   return (
//     <>
//       <Message></Message>
//       <Conditional></Conditional>
//       <Fruit />
//       {person.map((value, index) => {
//         return (
//           <Greet
//             message={value.message}
//             name={value.name}
//             emoji={value.emoji}
//           />
//         );
//       })}
//     </>
//   );
// }
// import Message from "./components/Message.jsx";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
