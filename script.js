function search() {
    const input = document.getElementById("searchInput").value;
    const resultDiv = document.getElementById("result");

    if (input.trim() === "") {
        resultDiv.textContent = "Digite algo para pesquisar.";
    } else {
        resultDiv.textContent = "Você pesquisou por: " + input;
    }
}

