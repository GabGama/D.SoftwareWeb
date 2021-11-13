function disparaMensagem(fulano, segundos) {

    function mensagem() {
        console.log("Olá! Tudo bem, " + fulano + "?")
    }

    return setTimeout(mensagem, segundos)
}

disparaMensagem("Gabriella", 10000)