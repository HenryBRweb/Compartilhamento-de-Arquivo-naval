var clc = require("cli-color");
var prompt = require("prompt-sync")();
// batalha naval

// 1. Criar e "Desenhar" o mapa
const mapaJogador: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
]
const mapaAdversario: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
];
// const mapaAdversario: number[][] = Array(8).fill(Array(10).fill(0));
function printarCor(linha:string):void {
    linha = linha.replaceAll('0', clc.bgBlue('  '));
    linha = linha.replaceAll('1', clc.bgBlack('  '));
    linha = linha.replaceAll('2', clc.bgRed('  '));
    console.log(linha);
}

function verificarNavio(mapa: number[][]): boolean {
    for (var linha of mapa) {
        if (linha.includes(1)) {
            return true;
        }
    }
    return false;
}
function vezAdversario(mapa: number [][]): number[][]{
        var x = Number(prompt('Digite uma coordenada X: '))
        var y = Number(prompt('Digite uma coordenada Y: '))
        if (mapa[x][y] == 1) {
        console.log("você acertou o navio :D")
    }   else {
        console.log("você não acertou :(")
    }
    mapa[x][y] = 2;
    for (var linha of mapa) {
        printarCor(linha.join(''));
    }
    return mapa;
}
function mostrarMapas(mapaJogador: number[][], mapaAdversario: number[][]):void{
    while(verificarNavio(mapaJogador)) {
        mapaJogador = vezAdversario(mapaJogador);
    } 
    console.log("você vendeu XD")
}
mostrarMapas(mapaAdversario);