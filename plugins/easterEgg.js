import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin(() => {
    if (process.client) {
        const userCommands = {
            showConsoleJoke: () => {
                const consoleJokes = [
                    'Ah, você abriu o console... Bem-vindo ao mundo dos hackers! 😎 Agora você pode roubar minha alma... ou apenas meus logs.',
                    'Você abriu o console, então você deve ser um hacker agora, né? Espera, você não está tentando mudar a cor do meu site, está? 😜',
                    'Console aberto! Está pronto para invadir o sistema? Spoiler: Você só vai ver umas piadas e erros mesmo. 🖥️💥',
                    'Nossa, você achou o console. Agora é só esperar o pedido do FBI... ou talvez só mais um "console.log". 👮‍♂️',
                    'Abrir o console? Você está quase no nível "Hacker do Ano"! Agora digite "showDevJoke()" para receber um prêmio... ou um "404". 😂',
                    'Parabéns, você é oficialmente um hacker... só que, na verdade, você só tem acesso ao meu console com piadas e logs. 🧑‍💻',
                    'Console aberto! Acho que você vai rodar um código super secreto... ah, não, espera, é só o meu código de piadas mesmo. 🎮',
                    'Você abriu o console, esperando encontrar um bug crítico? Spoiler: O único erro aqui é você tentando encontrar algo interessante. 😏',
                    'Hmm... Você abriu o console e está procurando o quê? Um "h1" perdido? Não, ele está bem ali... logo após "div". Boa sorte. 🔍',
                    'Você deve estar pensando: "Agora eu vou hackear tudo!" – Mas na verdade, está apenas olhando para um punhado de logs e mensagens bobas. 🙄',
                    'Aposta que você está só olhando para o código e se perguntando onde está o grande segredo. Dica: Não tem. Só tem piada. 🤐',
                    'Então, você abriu o console e está esperando um "document.querySelector("h1")"... Pode ir indo, mas você vai encontrar nada de mais. 😬',
                    'E aí, encontrou alguma coisa interessante? Não? Porque, adivinhe, o código aqui é só para rodar piadas... e mais nada. 😏',
                    'Console aberto e o que você encontra? Um "h1" e um punhado de piadas. Acho que você é o único "hacker" que não achou nada relevante. 😜',
                    'Sabia que quem abre o console se considera um hacker? Pois é, você agora está oficialmente no time! 🦸‍♂️... Só não tente hackear o meu "h1", ok? 😉',
                    'Procurando um segredo? Tente olhar para o meu "h1"... Não, sério, só um "h1" e mais nada. Eu juro. 🙃',
                    'Será que você vai encontrar algo que preste no console? Spoiler: Você vai sair com algumas piadas e logs, só isso. 😂'
                ];
                
                const randomConsoleJoke = consoleJokes[Math.floor(Math.random() * consoleJokes.length)];
                console.log(`%c${randomConsoleJoke}`, 'color: #FF6347; font-size: 16px; font-weight: bold;');
            },

            showLogo: () => {
                console.log(
                    '▗▄▄▖ ▗▄▄▖ ▗▖ ▗▖▗▖  ▗▖ ▗▄▖     ▗▄▄▖ ▗▄▄▄▖▗▄▄▄▖ ▗▄▄▖\n' +
                    '▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▛▚▖▐▌▐▌ ▐▌    ▐▌ ▐▌▐▌     █  ▐▌   \n' +
                    '▐▛▀▚▖▐▛▀▚▖▐▌ ▐▌▐▌ ▝▜▌▐▌ ▐▌    ▐▛▀▚▖▐▛▀▀▘  █   ▝▀▚▖\n' +
                    '▐▙▄▞▘▐▌ ▐▌▝▚▄▞▘▐▌  ▐▌▝▚▄▞▘    ▐▌ ▐▌▐▙▄▄▖▗▄█▄▖▗▄▄▞▘\n' 
                );
            }
        };

        window.showConsoleJoke = userCommands.showConsoleJoke;

        userCommands.showLogo();
        userCommands.showConsoleJoke();

        console.log('%cTente digitar "showConsoleJoke()" para ser um hacker.', 'color: #FF6347; font-size: 16px; font-weight: bold;');
    }
});
