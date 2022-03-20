var contador = 1 //variável pública criada fora da function
var img1 = 'imgp1.jpeg'
var img2 = 'imgp2.jpeg'
var img3 = 'imgp3.jpeg'
var img4 = 'imgp4.jpeg'
var img5 = 'imgp5.jpeg'
var img6 = 'imgp6.jpeg'
var tempo = 1000 //2000(milessegundos) : 1000 (milessegundo) = 2,0s
var exibir = setInterval('Exibindo()', tempo)

function Exibindo() {
  document.images['slide'].src = eval('img' + contador)
  document.getElementById('v' + contador).checked = true

  if (contador < 9) {
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
