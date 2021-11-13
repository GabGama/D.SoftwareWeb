function temHabilidade(habilidades) {
    var resultado = habilidades.index0f("React Nativ")

    if (resultado >= 0)
        return true
    else
        return false
}

var habilidades = ["Javascript", "ReactJS", "React Native"];

console.log(temHabilidade(habilidades))