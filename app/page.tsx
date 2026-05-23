export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <img
        src="/unetops-placeholder.png"
        alt="UNETOPS"
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "24px",
        }}
      />
    </main>
  );
}