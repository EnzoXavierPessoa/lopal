        function calculadora(){    
          while(true){
            let resultado = 0.0;
            let operando1;
            let operando2;
            let operador;

            operando1 = parseFloat( prompt("Digite o primeiro número: ") );
            operando2 = parseFloat( prompt("Digite o segundo número:") );
            operador = prompt("Digite uma das operações ( + - * / ): ");

            if ( operador === "+" ){
                resultado = operando1 + operando2;
            } else if  ( operador === "-"){
                resultado = operando1 - operando2;
            } else if ( operador === "*"){
                resultado = operando1 * operando2;
            } else if ( operador === "/" ){
                resultado = operando1 / operando2;
            } else {
                alert("Não é possivel dividir por zero."); 
                 continua = prompt("Digite sim para continuar e não encerrar.")
                 if(continua === "não"){
                    return
                    {
                    resultado = operando1 / operando2;
                    }
                 } else {
                    
                 }
                return           
            }
            if ((operador != "/" || operando2 != 0))      
            alert("resultado: " +
                operando1 + " " + operador + " " + operando2 + " = " + resultado);
           
            }   
        
        }