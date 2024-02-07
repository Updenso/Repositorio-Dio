function aplicarDesconto(valor, desconto) {
    return (valor - (valor *(desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor +(valor * (juros /100)));
}
const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('Avista Debito');
    console.log(aplicarDesconto - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log('Avista em dinheiro ou pix');
    console.log(aplicarDesconto - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log('Em duas vezes sem juros');
    console.log(precoEtiqueta);
} else {
    console.log('Em mais de 2 vezes com 10% de juros');
    console.log(aplicarJuros + (precoEtiqueta * 0.1));
}