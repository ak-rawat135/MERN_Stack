import Fruits from "./Fruits";
export default function Fruit() {
  const fruits = [
    { name: "Apple", emoji: "🍎", price: 10, sold: false },
    { name: "mango", emoji: "🥭", price: 80, sold: true },
    { name: "Banana", emoji: "🍌", price: 16, sold: true },
    { name: "kiwi", emoji: "🥝", price: 100, sold: false },
  ];
  return (
    <>
      <h1>This list of product</h1>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li>
              <Fruits
                key={fruit.name}
                name={fruit.name}
                price={fruit.price}
                emoji={fruit.emoji}
                sold={fruit.sold}
              ></Fruits>
            </li>
          );
        })}
      </ul>
    </>
  );
}
