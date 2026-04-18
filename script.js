const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert("Você pesquisou por: " + query);
  } else {
    alert("Digite algo para pesquisar!");
  }
});
