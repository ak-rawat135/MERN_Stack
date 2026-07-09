export default function Fruits({ name, price, emoji, sold }) {
  return (
    <>
      <h6>{sold}</h6>
      {sold ? (
        <h3>sold</h3>
      ) : (
        <h3>
          {name} {price} {emoji} {sold}
        </h3>
      )}
    </>
  );
}
