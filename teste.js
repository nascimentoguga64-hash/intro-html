/ Criamos uma função que aceita o ID da seção como "alvo"
function configurarCarrossel(idDaSecao) {
    const secao = document.getElementById(idDaSecao);
    
    // Se a seção não existir no HTML, ele não faz nada (evita erros)
    if (!secao) return;

    // IMPORTANTE: Agora buscamos os elementos APENAS dentro desta seção
    const trilho = secao.querySelector('.cards-inner');
    const cards = secao.querySelectorAll('.card');
    const btnPrev = secao.querySelector('.seta-prev');
    const btnNext = secao.querySelector('.seta-next');
    let index = 0;

    function atualizarCarrossel() {
        const larguraJanela = window.innerWidth;
        if (larguraJanela < 1024) {
            const deslocamento = index * 100;
            trilho.style.transform = translateX(-${deslocamento}%);
        } else {
            trilho.style.transform = 'translateX(0)';
        }
    }

    // Verificamos se os botões existem antes de adicionar o clique
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (index < cards.length - 1) {
                index++;
            } else {
                index = 0;
            }
            atualizarCarrossel();
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = cards.length - 1;
            }
            atualizarCarrossel();
        });
    }

    // Ajusta o carrossel se a tela aumentar ou diminuir
    window.addEventListener('resize', atualizarCarrossel);
}

// AGORA CHAMAMOS A FUNÇÃO PARA CADA SEÇÃO QUE A LÍDER CRIOU NO HTML:
configurarCarrossel('direitoshumanos');
configurarCarrossel('meioambiente');
configurarCarrossel('educacao');
configurarCarrossel('saude');
configurarCarrossel('combateafome');