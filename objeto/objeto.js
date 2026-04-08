const pessoa = {
    nome: "Henrique",
    sobrenome: "Goés",
    idade: 16,
    time: "Palmeiras",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this}//retorna o propio objeto
};

console.log(pessoa.nomeCompleto() + " tem " +
 pessoa.sobrenome + " tem " +
    pessoa.idade + " anos e torce para o " + pessoa.time
)

const pessoaStringificada = JSON.stringify(pessoa);
console.log(pessoaStringificada);

const pessoaParseada = JSON.parse(pessoaStringificada);

console.log(pessoaParseada.nome + " " + pessoaParseada.sobrenome + " tem" +
    pessoaParseada.idade + " anos e torce para o " + pessoaParseada.time
)