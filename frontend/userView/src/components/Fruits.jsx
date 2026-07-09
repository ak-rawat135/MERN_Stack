export default function Fruits({ name, price, emoji }) {
  return (
    <>
      <li>
        The price of = {name} {price} for = {emoji}
      </li>
    </>
  );
}
