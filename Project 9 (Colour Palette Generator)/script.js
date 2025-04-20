const generateBtn = document.getElementById("generateBtn");
const colorsContainer = document.querySelector(".colors_container");
const toast = document.getElementById("toast");

const singleHexColorGenerator = () => {
  const hex = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

const colorPaletteGenerator = () => {
  const palette = [];
  for (let i = 0; i < 6; i++) {
    palette.push(singleHexColorGenerator());
  }
  return palette;
};

const showToast = () => {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
};

const renderColorPalette = () => {
  colorsContainer.innerHTML = "";
  const colors = colorPaletteGenerator();

  colors.forEach((color) => {
    const div = document.createElement("div");
    div.classList.add("colorBox");
    div.style.backgroundColor = color;

    const p = document.createElement("p");
    p.innerText = color;

    div.appendChild(p);
    colorsContainer.appendChild(div);

    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      showToast();
    });
  });
};

renderColorPalette();
generateBtn.addEventListener("click", renderColorPalette);
