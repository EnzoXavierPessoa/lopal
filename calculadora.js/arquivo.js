```javascript
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
            } else if  ( operador === "-" ){
                resultado = operando1 - operando2;
            } else if ( operador === "*" ){
                resultado = operando1 * operando2;
            } else if ( operador === "/" ){
                // Verificação para evitar divisão por zero
                if (operando2 === 0) {
                    alert("Erro: Não é possível dividir por zero.");
                    // Pergunta se o usuário deseja continuar após o erro
                    let continua = prompt("Deseja continuar? Digite 'sim' para continuar ou 'não' para encerrar.");
                    if (continua && continua.toLowerCase() === "não") {
                        return; // Encerra a função se o usuário digitar 'não'
                    }
                    // Se o usuário digitar 'sim' ou qualquer outra coisa, o loop continua
                    continue; // Volta para o início do loop para nova entrada
                }
                resultado = operando1 / operando2;
            } else {
                alert("Operador inválido. Por favor, use +, -, * ou /.");
                // Pergunta se o usuário deseja continuar após um operador inválido
                let continua = prompt("Deseja continuar? Digite 'sim' para continuar ou 'não' para encerrar.");
                if (continua && continua.toLowerCase() === "não") {
                    return; // Encerra a função se o usuário digitar 'não'
                }
                // Se o usuário digitar 'sim' ou qualquer outra coisa, o loop continua
                continue; // Volta para o início do loop para nova entrada
            }
            
            // Exibe o resultado apenas se a operação foi bem-sucedida e não houve divisão por zero
            if (operador === "/" && operando2 === 0) {
                // Já tratamos o erro de divisão por zero acima, então não fazemos nada aqui.
                // O 'continue' na seção de divisão por zero já garante que o loop recomeça.
            } else {
                alert("Resultado: " + operando1 + " " + operador + " " + operando2 + " = " + resultado);
            }
            
            // O loop while(true) continuará indefinidamente até que um 'return' seja acionado.
            // Se desejar que o usuário escolha continuar ou sair após cada cálculo, adicione um prompt aqui.
            // Exemplo:
            // let continuarCalculando = prompt("Deseja fazer outro cálculo? (sim/não)");
            // if (continuarCalculando && continuarCalculando.toLowerCase() === "não") {
            //     return;
            // }
          }
        }
```

**Observação:** O código fornecido é JavaScript, não HTML. A análise e as correções foram aplicadas assumindo que a linguagem correta é JavaScript.

**Correções Aplicadas:**

1.  **Tratamento de Divisão por Zero:**
    *   A lógica original para divisão por zero estava incorreta e causava um `return` inesperado.
    *   Foi adicionada uma verificação explícita `if (operando2 === 0)` dentro do bloco de divisão (`/`).
    *   Ao detectar divisão por zero, um `alert` de erro é exibido.
    *   O usuário é perguntado se deseja continuar. Se digitar "não", a função `calculadora` é encerrada com `return`.
    *   Se o usuário desejar continuar (digitando "sim" ou qualquer outra coisa), `continue` é usado para reiniciar o loop `while(true)` e pedir novas entradas.

2.  **Tratamento de Operador Inválido:**
    *   O bloco `else` para operadores inválidos também foi aprimorado.
    *   Um `alert` informa sobre o operador inválido.
    *   O usuário é perguntado se deseja continuar, com a mesma lógica de `return` ou `continue` para reiniciar o loop.

3.  **Lógica de Exibição do Resultado:**
    *   A condição `if ((operador != "/" || operando2 != 0))` foi simplificada e movida para garantir que o resultado só seja exibido após a validação de todas as operações, especialmente a divisão por zero.
    *   A exibição do resultado agora ocorre apenas se a operação não for uma divisão por zero.

4.  **Estrutura de `return`:**
    *   Removidos blocos `return` mal formatados e com código após eles, que não seriam executados.

5.  **Clareza e Legibilidade:**
    *   Adicionados comentários para explicar as correções e a lógica.
    *   Melhorada a indentação para maior clareza.