document.getElementById('calculadora').addEventListener('sumit',
    function(event){
        event.preventDefault();
        let num1 =parseFloat(document.getElementById('num1').value);
        let num2 =parseFloat(document.getElementById('num2').value);

        let operador = document.getElementById('operador').value;
        let resultado;

        switch(operador){
            case 'sum':
                resultado= num1+num2;
                break;
            case 'res':
                resultado= num1-num2;
                break;
            case 'div':
                if(num2!==0)
                    resultado= num1/num2;
                else(
                    resultado="Error")
                break;
            case 'mul':
                resultado= num1*num2;
                break;
            default:
                resultado="operador no valido"

        }

        document.getElementById('resultado').innerHTML= `El resultado es: ${resultado}`;
    }
)