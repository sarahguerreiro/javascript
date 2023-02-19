function carregar() {
    var msg = document.getElementById('msg')
    var img =  document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {

        img.src = 'manhazinha.png'
        document.body.style.background = '#D4BBA2'

    } else if (hora >= 12 && hora < 18) {
        
        img.src = 'tardinha.png'
        document.body.style.background = '#BABF2C'
    } else {
        
        img.src = 'noitinha.png'
        document.body.style.background = '#020659'
    }
}