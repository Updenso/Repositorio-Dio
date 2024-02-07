function escreverMeuNome (nome) {
    console.log('meu nome é ' + nome);
}

function verificarIdade(idade) {
    if ( idade >= 10) {
        console.log( escreverMeuNome('Felipe') +'Maior');
    } else {
        console.log('Menor');
    }
}
verificarIdade(21);