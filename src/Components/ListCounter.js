export default function ListCounter({ list = [1] }) {
  return (
    <div className="list-counter">{list.length > 0 ? list.length : ""}</div>
  );
}
