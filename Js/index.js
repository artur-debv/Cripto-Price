fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    headers: {
        'X-CMC_PRO_API_KEY': '22cbba6c-6453-443c-86ed-fbc86efc8718',
    },
})
.then((response) => response.json())
.then((data) => {
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': '22cbba6c-6453-443c-86ed-fbc86efc8718',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        const moedas = data.data;
    
        console.log(data);
    
        const tabela = document.querySelector('.table');
        const corpoTabela = tabela.querySelector('tbody');
    
        // Limpar o corpo da tabela
        corpoTabela.innerHTML = '';
    
        // Iterar sobre cada moeda e criar uma linha para cada uma
        moedas.forEach((moeda, index) => {
            const linha = document.createElement('tr');
    
            // Criar a célula do índice
            const celulaIndice = document.createElement('th');
            celulaIndice.scope = 'row';
            const linkIndice = document.createElement('a');
            linkIndice.href = `paginaMoeda.html?id=${moeda.id}`;
            linkIndice.style.textDecoration = 'none';
            linkIndice.style.color = 'inherit';
            linkIndice.textContent = index + 1;
            celulaIndice.appendChild(linkIndice);
            linha.appendChild(celulaIndice);
    
            // Criar a célula da imagem
            const celulaImagem = document.createElement('td');
            const linkImagem = document.createElement('a');
            linkImagem.href = `paginaMoeda.html?id=${moeda.id}`;
            linkImagem.style.textDecoration = 'none';
            linkImagem.style.color = 'inherit';
            const imagemElement = document.createElement('img');
            imagemElement.src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${moeda.id}.png`;
            imagemElement.alt = `${moeda.name} (${moeda.symbol})`;
            linkImagem.appendChild(imagemElement);
            celulaImagem.appendChild(linkImagem);
            linha.appendChild(celulaImagem);
    
            // Criar a célula do nome
            const celulaNome = document.createElement('td');
            const linkNome = document.createElement('a');
            linkNome.href = `paginaMoeda.html?id=${moeda.id}`;
            linkNome.style.textDecoration = 'none';
            linkNome.style.color = 'inherit';
            linkNome.textContent = `${moeda.name}`;
            celulaNome.appendChild(linkNome);
            linha.appendChild(celulaNome);
    
            // Criar a célula do símbolo
            const celulaSymbol = document.createElement('td');
            const linkSymbol = document.createElement('a');
            linkSymbol.href = `paginaMoeda.html?id=${moeda.id}`;
            linkSymbol.style.textDecoration = 'none';
            linkSymbol.style.color = 'inherit';
            linkSymbol.textContent = `${moeda.symbol}`;
            celulaSymbol.appendChild(linkSymbol);
            linha.appendChild(celulaSymbol);
    
            // Criar a célula do preço
            const celulaPreco = document.createElement('td');
            const linkPreco = document.createElement('a');
            linkPreco.href = `paginaMoeda.html?id=${moeda.id}`;
            linkPreco.style.textDecoration = 'none';
            linkPreco.style.color = 'inherit';
            linkPreco.textContent = `${moeda.quote.USD.price.toFixed(2)}`;
            celulaPreco.appendChild(linkPreco);
            linha.appendChild(celulaPreco);
    
            // Adicionar a linha ao corpo da tabela
            corpoTabela.appendChild(linha);
        });
    })
    .catch((error) => console.log(error));
})
.catch((error) => console.log(error));



        // Alternar entre modos escuro e claro
        document.getElementById('icon').addEventListener('click', function() {
            const body = document.body;
            const icon = document.getElementById('icon');

            // Alterna as classes do body
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            // Alterna o ícone
            if (icon.classList.contains('bxs-sun')) {
                icon.classList.remove('bxs-sun');
                icon.classList.add('bxs-moon');
            } else {
                icon.classList.remove('bxs-moon');
                icon.classList.add('bxs-sun');
            }

            // Salvar a preferência do usuário no localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('mode', 'dark');
            } else {
                localStorage.setItem('mode', 'light');
            }
        });

        // Verificar a preferência do usuário ao carregar a página
        window.addEventListener('load', function () {
            const mode = localStorage.getItem('mode');
            const body = document.body;
            const icon = document.getElementById('icon');

            if (mode === 'dark') {
                body.classList.add('dark-mode');
                body.classList.remove('light-mode');
                icon.classList.add('bxs-moon');
                icon.classList.remove('bxs-sun');
            } else {
                body.classList.add('light-mode');
                body.classList.remove('dark-mode');
                icon.classList.add('bxs-sun');
                icon.classList.remove('bxs-moon');
            }
        });
