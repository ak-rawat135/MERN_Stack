import Fruits from "./Fruits";
export default function Fruit() {
  const fruits = [
    { name: "Apple", emoji: "🍎🍌🥝", price: 10 },
    { name: "mango", emoji: "🥭", price: 80 },
    { name: "Banana", emoji: "🍌", price: 16 },
    { name: "kiwi", emoji: "🥝", price: 100 },
  ];
  return (
    <>
      <h1>This list of product</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <Fruits
              key={fruit.name}
              name={fruit.name}
              price={fruit.price}
              emoji={fruit.emoji}
            ></Fruits>
          );
        })}
      </ul>
    </>
  );
}
