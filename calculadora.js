function calcularCuotas() {
    const totalAmount = parseFloat(prompt("Ingrese el monto total:"));
    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));

    if (isNaN(totalAmount) || isNaN(cuotas) || totalAmount <= 0 || cuotas <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const valorCuota = totalAmount / cuotas;

    let mensaje = `El valor de cada cuota es: ${valorCuota.toFixed(2)}\n\n`;

    for (let i = 1; i <= cuotas; i++) {
        mensaje += `Cuota ${i}: ${valorCuota.toFixed(2)}\n`;
    }

    alert(mensaje);
}