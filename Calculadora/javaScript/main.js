function calculadora(){
    const operacao= Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Resto da divisão (%) \n 6 - Potenciação (**) \n'));

   

    if(!operacao || operacao >= 7){
        alert('ERRO - Operação Inválida!!');
        calculadora();
    }else{

        let n1= Number (prompt('Insira 1ª valor:'));
        let n2= Number (prompt('Insira 2ª valor:'));
        let resultado;

        if(!n1 ){
            alert('Por favor insira valor válido!!');
            calculadora();
        }else if(!n2){
            alert('Por favor insira valor válido!!');
            calculadora();

        }else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
            }
            function restDivisao(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`)
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`)
            }
            
            function novaOperacao(){
                let opcao= prompt('Deseja fazer outra Operaçao? \n 1 - Sim \n 2 - Não');
                if (opcao == 1){
                    calculadora();
            
                }else if (opcao == 2){
                    alert('Até Mais !!');
                }else{
                    alert('Digite uma opção valída!!');
                    novaOperacao();
            
                }
            }
            
            
            
           

        }

        if (operacao == 1){
            soma(); 
            novaOperacao();
        
        } else if(operacao == 2){
            subtracao();
            novaOperacao();
        
        }else if(operacao == 3){
            multiplicacao();
            novaOperacao();
        
        }else if(operacao == 4){
            divisao();
            novaOperacao();
        
        }else if(operacao == 5){
            restDivisao();
            novaOperacao();
        
        }else if(operacao == 6){
            potenciacao();
            novaOperacao();
           
        }


       
      
    }

}

calculadora();