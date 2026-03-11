function idade(){
    let idade;
    do{
        idade = parseInt(prompt("Digite a sua idade"));
    }while(idade < 5 || idade > 150 || idade != NaN );
    alert("idade validada.");


}