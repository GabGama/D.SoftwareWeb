var endereco = {
    rua: "Rua Mavel",
    numero: 123,
    bairro: "Mangueiral",
    cidade: "Horizonte-CE"
}

function mensagem() {
    return ("Gabriela reside em " +
        endereco.cidade + ", no bairro " +
        endereco.bairro + ", na rua " +
        endereco.rua + ", com o numero: " +
        endereco.numero
    )
}

console.log(mensagem())