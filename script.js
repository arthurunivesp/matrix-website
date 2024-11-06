const container = document.querySelector('.container');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const byteSpacing = 100; // Ajuste o valor para o espaçamento desejado

function gerarByteBinario() {
    let byte = '';
    for (let i = 0; i < 8; i++) { // Gera uma sequência de 8 dígitos
        byte += Math.random() < 0.5 ? '0\n' : '1\n'; // Quebra de linha após cada dígito
    }
    return byte;
}

function criarByte() {
    const byte = document.createElement('div');
    byte.classList.add('byte');
    byte.innerText = gerarByteBinario();
    byte.style.left = Math.random() * (containerWidth - byteSpacing) + 'px';
    byte.style.top = '0px';
    container.appendChild(byte);

    function cair() {
        let posicaoAtual = parseFloat(byte.style.top);
        if (posicaoAtual < containerHeight) {
            byte.style.top = posicaoAtual + 1 + 'px';
        } else {
            byte.remove();
        }
        requestAnimationFrame(cair);
    }

    requestAnimationFrame(cair);
}

setInterval(criarByte, 300); // Ajuste o intervalo para a frequência de novos bytes
