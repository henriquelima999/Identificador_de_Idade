function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value >= ano){
        window.alert('Verifique o ano de nascimento inserido e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero
        var img = document.createElement('img')                               // criando tag IMG
        img.setAttribute('id', 'foto')                                        // tag IMG possui id=foto

        if(fsex[0].checked){                                                  //se o primeiro botao estiver marcado (masculino)
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe_Masc.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'adolescente_Masc.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'adulto_Masc.png')
            }else{
                // idoso
                img.setAttribute('src', 'idoso_Masc.png')
            }
        }else{
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe_fem.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'adolescente_fem.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src', 'adulto_fem.png')
            }else{
                // idoso
                img.setAttribute('src', 'idoso_fem.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) <strong>${genero}</strong> com ${idade} anos.`
        res.appendChild(img)
    }



}




