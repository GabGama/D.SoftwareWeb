function experienciaProfissional(anosExperiencia) {
    if (anosExperiencia > 0 && anosExperiencia <= 1)
        return "Profissional Iniciante!"
    else if (anosExperiencia > 1 && anosExperiencia <= 3)
        return "Profissional Intermediario!"
    else if (anosExperiencia > 3 && anosExperiencia <= 6)
        return "Profissional Avançado!"
    else if (anosExperiencia > 7)
        return "Profissional Master!"

}
var anosTrabalho = 9

console.log(experienciaProfissional(anosTrabalho));