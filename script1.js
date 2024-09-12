// Trabalho Murillo Marinho e Leonardo Koga
function Calcular() {
    let tipo = document.querySelector('input[name="conversao"]:checked').value;
    let valor = parseFloat(document.getElementById('tempe').value);
    let x = 0;

    if (!isNaN(valor)) {
       
        switch (tipo) {
            case "fa":
                
                x = (5 / 9) * (valor - 32);
                unidade='°C  '
                break;
            case "ce":
               
                x = (9 / 5) * valor + 32;
                unidade= '°F'
                break;
            default:
               
                x = 'Selecione um tipo de conversão';
                break;
        }

       
        document.getElementById('resultado').textContent = x.toFixed(2)+unidade;
    } else {
     
        document.getElementById('resultado').textContent = 'Por favor, insira um número válido.';
    }
}

function Limpar() {
    document.getElementById('formTemperatura').reset();
    document.getElementById('resultado').textContent = '';
}