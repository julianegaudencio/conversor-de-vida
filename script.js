function calcular(){
    var dataAniversario = new Date(document.getElementById('dataAniversario').value)
    var dataHoje  = new Date()
    
    var diferencaDatas = dataHoje.getTime() - dataAniversario.getTime()
    var diferencaDias = diferencaDatas / (1000 * 3600 * 24 ) + 1
    var result = parseInt(diferencaDias)

    
    document.getElementById('result').innerHTML =  "Você está vivendo há "+ result + " dias!";

}

