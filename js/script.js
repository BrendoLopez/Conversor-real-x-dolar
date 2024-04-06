function converterMoeda() {
    const realInput = document.getElementById("realInput").value;
    const dolarValue = 5.07;  // Valor do dia 06/04/2024

    if (realInput === "" || isNaN(realInput)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    const valorConvertido = parseFloat(realInput) / dolarValue;
    document.getElementById("resultado").innerText = `Valor em dólar: $${valorConvertido.toFixed(2)}`;
}
