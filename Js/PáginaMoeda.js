function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


const moedaId = getQueryParam('id');

if (moedaId) {
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${moedaId}`, {
        headers: {
            'X-CMC_PRO_API_KEY': '22cbba6c-6453-443c-86ed-fbc86efc8718',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            const moeda = data.data[moedaId];

            document.title = `${moeda.name} (${moeda.symbol}) - Detalhes`;
            const favicon = document.getElementById('favicon');
            if (favicon) {
                favicon.href = moeda.logo;
            } else {
                const link = document.createElement('link');
                link.rel = 'icon';
                link.href = moeda.logo;
                document.head.appendChild(link);
            }

            document.getElementById('moedaNome').textContent = `${moeda.name}(${moeda.symbol})` ;
            document.getElementById('moedaImagem').src = moeda.logo;
            document.getElementById('moedaImagem').alt = `${moeda.name} logo`;
            

            return fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${moedaId}`, {
                headers: {
                    'X-CMC_PRO_API_KEY': '22cbba6c-6453-443c-86ed-fbc86efc8718',
                },
            });
        })



    // Função para obter as cotações mais recentes da moeda
    function getCotacoesMaisRecentes(moedaId) {
        const url = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${moedaId}`;

        // Faz a requisição HTTP para obter os dados das cotações mais recentes
        return fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': '22cbba6c-6453-443c-86ed-fbc86efc8718', // Substitua pela sua chave de API
            },
        })
            .then(response => response.json())
            .then(data => {
                // Extrai o preço mais recente da moeda
                const preco = data.data[moedaId].quote.USD.price;
                return preco;
            })
            .catch(error => {
                console.error('Erro ao obter os dados das cotações mais recentes:', error);
                return null;
            });
    }
    

    // Função para criar e exibir o gráfico
    function criarGrafico(preco) {
        // Configuração do gráfico
        const ctx = document.getElementById('graficoMoeda').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Agora'], // Usa apenas uma label para o momento atual
                datasets: [{
                    label: `Preço (USD)`,
                    data: [preco], // Adiciona o preço mais recente ao gráfico
                    borderColor: 'blue',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false, // Começa o eixo y a partir do menor preço
                        title: {
                            display: true,
                            text: 'Preço (USD)'
                        }
                    }
                }
            }
        });
    }

    // Chamada da função para obter as cotações mais recentes e criar o gráfico
    getCotacoesMaisRecentes(moedaId)
        .then(preco => {
            if (preco !== null) {
                criarGrafico(preco);
            } else {
                console.log('Não foi possível obter os dados das cotações mais recentes.');
            }
        });

}