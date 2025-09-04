export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding items to travel 🎒</em>
      </footer>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const Percentage =
    numItems === 0 ? 0 : Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You got everything ready to go ✈️"
          : `You have ${numItems} items & you ✅ packed ${numPackedItems} items`}
      </em>

      <br />
      <em>🎒 {Percentage}%</em>
    </footer>
  );
}
