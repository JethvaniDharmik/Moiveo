export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! This page doesn’t exist.</p>
      <a href="/" style={{
        padding: "10px 20px",
        background: "black",
        color: "white",
        borderRadius: "5px",
        textDecoration: "none"
      }}>
        Go Home
      </a>
    </div>
  );
}
