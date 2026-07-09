// function Greet(props) {
//     //direct way to grab with props
// //   return (
// //     <div>
// //       <h1>{props.message} {props.name}</h1>

// //     </div>
// //   );

// //second way will better
// const {name , message}=props;
// return (
//     <div>
//       <h1>{name} {message}</h1>

//     </div>
//   );

// }
//confuesd with props this will be better understanding
function Greet({ message, name, emoji = "👍" }) {
  return (
    <>
      <h1>
        {message}
        {name}
        {emoji}
      </h1>
    </>
  );
}
export default Greet;
