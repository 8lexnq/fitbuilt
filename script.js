const form = document.getElementById("fitForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = document.getElementById("height").value;
  const build = document.getElementById("build").value;
  const style = document.getElementById("style").value;
  const budget = document.getElementById("budget").value;
  const brands = document.getElementById("brands").value;
  const occasion = document.getElementById("occasion").value;

  let top = "A clean fitted or slightly cropped top";
  let bottom = "Straight or slim pants";
  let shoes = "Clean sneakers";
  let layer = "A short jacket or hoodie";

  if (style === "street") {
    top = "Cropped graphic tee";
    bottom = "Slim or relaxed straight denim";
    shoes = "Statement sneakers";
    layer = "Short zip hoodie or denim jacket";
  }

  if (style === "luxury") {
    top = "Fitted premium tee";
    bottom = "Clean slim or flare denim";
    shoes = "Luxury sneakers";
    layer = "Cropped designer jacket";
  }

  if (style === "sporty") {
    top = "Fitted athletic tee";
    bottom = "Nike-style tech pants";
    shoes = "Performance sneakers";
    layer = "Lightweight track jacket";
  }

  result.classList.remove("hidden");

  result.innerHTML = `
    <div class="card">
      <h3>YOUR FIT</h3>
      <p><strong>Height:</strong> ${height} cm</p>
      <p><strong>Build:</strong> ${build}</p>
      <p><strong>Style:</strong> ${style}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Brands:</strong> ${brands || "Open to anything"}</p>
      <p><strong>Occasion:</strong> ${occasion}</p>
      <br>
      <p><strong>TOP</strong><br>${top}</p>
      <p><strong>BOTTOM</strong><br>${bottom}</p>
      <p><strong>SHOES</strong><br>${shoes}</p>
      <p><strong>LAYER</strong><br>${layer}</p>
    </div>
  `;
});
