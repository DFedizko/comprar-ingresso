function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let qtdInngressosPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdIngressosSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdIngressosInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (tipoIngresso == 'inferior') {
        if (quantidade > qtdIngressosInferior) {
            alert('Quantidade de ingressos indisponíveis para a cadeira inferior!');
            return;
        } else {
            comprarIngresso('qtd-inferior', qtdIngressosInferior, quantidade);
        }
        
    } else if (tipoIngresso == 'superior') {
        if (quantidade > qtdIngressosSuperior) {
            alert('Quantidade de ingressos indisponíveis para a cadeira superior!');
            return;
        } else {
            comprarIngresso('qtd-superior', qtdIngressosSuperior, quantidade);
        }

    } else if (tipoIngresso == 'pista') {
        if (quantidade > qtdInngressosPista) {
            alert('Quantidade de ingressos indisponíveis para a pista!');
            return;
        } else {
            comprarIngresso('qtd-pista', qtdInngressosPista, quantidade);
        }
    } 
}

function comprarIngresso(id, qtdIngressos, quantidade) {
    alert('Compra realizada com sucesso!');
    document.getElementById(id).textContent = qtdIngressos -= quantidade;
}