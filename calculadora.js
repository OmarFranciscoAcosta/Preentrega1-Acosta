document.addEventListener('DOMContentLoaded', () => {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcularCuotas);
});

function calcularCuotas() {
    const totalAmountInput = document.getElementById('totalAmount');
    const cuotasInput = document.getElementById('cuotas');

    const totalAmount = parseFloat(totalAmountInput.value);
    const cuotas = parseInt(cuotasInput.value);

    if (isNaN(totalAmount) || isNaN(cuotas) || totalAmount <= 0 || cuotas <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores válidos.',
        });
        return;
    }

    const valorCuota = totalAmount / cuotas;

    let mensaje = `El valor de cada cuota es: ${valorCuota.toFixed(2)}\n\n`;

    for (let i = 1; i <= cuotas; i++) {
        mensaje += `Cuota ${i}: ${valorCuota.toFixed(2)}\n`;
    }

    Swal.fire({
        title: 'Resultado',
        text: mensaje,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });

    mostrarResultado(mensaje);
}
