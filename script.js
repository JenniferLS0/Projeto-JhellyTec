var contador = 1 //variável pública criada fora da function
var img1 = 'imagem1.png'
var img2 = 'imagem2.png'
var img3 = 'imagem3.png'
var img4 = 'imagem4.jpeg'
var tempo = 1700 //2000(milessegundos) : 1000 (milessegundo) = 2,0s
var exibir = setInterval('Exibindo()', tempo)

function Exibindo() {
  document.images['slide'].src = eval('img' + contador)
  document.getElementById('v' + contador).checked = true

  if (contador < 4) {
    contador++
  } else {
    contador = 1
  }
}

function Muda(x) {
  clearInterval(exibir) //interrompe o que está rodando no setInterval
  contador = x
  exibir = setInterval('Exibindo()', tempo) //recomeçar o looping
}

function abreMenu() {
  document.getElementById('menu-lateral').style.width = '45%'
  document.getElementById('menu-lateral').style.heght = '100%'
  document.getElementById('botao-hamburg').style.visibility = 'hidden'
}

function fechaMenu() {
  document.getElementById('menu-lateral').style.width = '0%'
  document.getElementById('corpo-do-site').style.marginLeft = '0%'
  document.getElementById('botao-hamburg').style.visibility = 'visible'
}
