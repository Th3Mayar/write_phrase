export const handleClick = () => {
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", () => {
    window.location.href = "/game";
  });
};