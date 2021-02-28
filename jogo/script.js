let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let cobrinha = []
cobrinha[0] = {x: 8 * box, y: 8 * box}
let direcao = "direita"

function criarBG()
{
	context.fillStyle = "lightgreen"
	context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha()
{
	for(i = 0; i < cobrinha.length; i++)
	{
		context.fillStyle = "green"
		context.fillRect(cobrinha[i].x, cobrinha[i].y, box, box)
	}
}

function iniciarJogo()
{
	criarBG()
	criarCobrinha()
	let cobrinhaX = cobrinha[0].x
	let cobrinhaY = cobrinha[0].y
	if(direcao == "direita") cobrinhaX += box
	if(direcao == "esquerda") cobrinhaX -= box
	if(direcao == "cima") cobrinhaX -= box
	if(direcao == "baixo") cobrinhaX += box

	cobrinha.pop()
	let novaCabeca = {x: cobrinhaX, y: cobrinhaY}
	cobrinha.unshift(novaCabeca)
}

let jogo = setInterval(iniciarJogo, 100)