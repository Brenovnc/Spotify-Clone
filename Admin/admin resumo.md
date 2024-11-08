npm install

npm intall axios react-router-dom react-toastify

Acima estão listados os comandos dados inicialmente. O Axios chamará a API através do react-router-dom, criando múltiplas rotas no painel de administrador. O react-toastify será usado para exibir as notificações do sistema.

Será necessário roda o backend em um terminal e o painel de admin em outro. Agora, o primeiro passo é limpar os arquivos que foram criados pelo vite. Em index, o título será alterado. Em src, o App.css será excluido, o index.css será limpo, o app.jsx será limpo e alterado pelo rafce. A pasta assets será limpa.

Depois disso, o tailwind será instalado. Exeutando os dois comandos presentes no passo 2 do site https://tailwindcss.com/docs/guides/vite, referente a instalação do tailwind, um arquivo postcss.config.js e outro chamado tailwind.config.js serão criados. Depois disso, é necessário copiar a configuração do passo 3 e jogá-la no arquivo tailwind.config.js. Dps é necessário jogar o código do passo 4 no index.css. Depois disso, basta dar npm run dev novamente.

Agora criaremos a estrutura de pastas do projeto: Em src será criado a pasta pages e components. Nessa etapa também adicionaremos todos os assets na pasta assets. Dentro de pages, criaremos os componentes addAlbum, addSong, listAlbum, listSong.

Em main.jsx, importaremos o browserRouter que encapsulará o componente App chamado nesse componente.

Agora, a partir do react toastify (site), importaremos as duas linhas requisitadas na sessão The gist.

Agora, para cada uma das pages criadas, colocaremos uma rota pertencente a ela em App.jsx.

Agora, em componentes criaremos a sideBar. Depois, colocando a side bar fora da div onde as rotas foram definidas em App.jsx, faremos com que essa side bar se mantenha para todas as páginas do site.

Depois implementaremos a lógicas das 4 páginas criadas, usando o axios para fazer o contato com o back.
