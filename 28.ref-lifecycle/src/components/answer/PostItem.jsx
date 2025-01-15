export default function PostItem({ id, title, body }) {
  return (
    <div>
      <div style={{ border: "2px solid blue" }}>
        <span>No.{id}</span>
        <span>{title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
