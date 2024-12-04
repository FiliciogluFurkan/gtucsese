// Import Poppins font from Google Fonts
const style = document.createElement("style");
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
`;
document.head.appendChild(style);

const NotImplementedYet = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(120deg, #48C9B0, #1D8348, #58D68D)", // Refined green gradient
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
          Not Implemented Yet
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
          This feature is still under development. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default NotImplementedYet;
