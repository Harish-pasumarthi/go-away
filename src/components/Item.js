export default function Item({ item, onDeleteItem, onUpdateItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItems(item.id)}
      />
      <span
        style={
          item.packed
            ? { textDecoration: "line-through", color: "#4bee0a" }
            : {}
        }>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&#10006;</button>
    </li>
  );
}
