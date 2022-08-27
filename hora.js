function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var text = document.querySelector("div#hora")
    var imagem = document.querySelector("img#img")
    
    
    if(hora < 12){
        text.innerHTML = `Agora são ${hora} horas. Tenha um bom dia!`
        imagem.src = 'manhã.png'
        document.body.style.background = '#778DA9'
    
    } else if (hora <= 18){
        text.innerHTML = `Agora são ${hora}  horas. Tenha uma boa tarde!`
        imagem.src = 'tarde.png'
        document.body.style.background = '#F17300'
    }else{
        text.innerHTML = `Agora são ${hora}  horas. Tenha uma boa noite!`
        imagem.src = 'noite.png'
        document.body.style.background = '#07020D'
    }
}