Primeiros resumos)

`npm create vite@latest`:  Cria um repositorio local react
`npm install`:  Instala dependências
`npm run dev`:  Hosteia um servidor local

Limpeza do repositório inicial

- Em src, apaga o App.css, limpa o index.css
- Limpa o App.jsx e cria um componente básico (`rafce`)
- Em index.html, mude o nome da página

Através de um link deixado no vídeo assistido, há todos os assets usados no projeto. Um dos arquivos é o assets.js, que transforma as imagens em objetos e apresenta uma lista de objetos.

Instalação da dependência presente em: [https://tailwindcss.com/docs/guides/vite](). Basta seguir a documentação. Tailwind são um conjunto de tags em css que facilitam a estilização.

PRIMEIROS COMPONENTES

Primeiro, no App.jsx, mudanças de background e da tela como um todo são aplicados. Além disso, cria-se duas pastas: Context e components.

O primeiro componente criado é o sidebar. Ele já é todo estilizado e redimensionado.
O segundo componente criado é o Player. Ele também é todo estilizado e redimensionado.

O terceiro componente criado é o Display (tela central). Aqui o Home e os albuns serão criados, e para isso as rotas também serão criadas através do react router DOM package. Para o uso dessa dependência, é necessário o seguinte comando:

`npm install react-router-dom`

Além disso, é necessário importar o BrowserRouter na main.jsx e addicionar a tag do BroserRouter com o componente `<App />` dentro dele.

Dentro do display, duas rotas serão criadas, logo duas componentes também:

- DisplayHome
- DisplayAlbum

Ainda dentro do componente Display, as rotas para ambas serão criadas.

Dentro do Display, um outro componente Navbar também será incluso, criando o botão de avançar e retornar página e o botão de Explore Premium, de Install App, a foto do usuário, e os botões de All, Music e Podcast.

Agora, o arquivo DisplayHome será alterado. Primeiramente, criamos um novo componentes chamado AlbumItem. Depois, um map é feito nos albuns presentes dentro de assets, importando cada um deles para dentro do display.

Uma alteração é feita dentro do index.css. A barra de rolagem dos alguns é ocultada.

Depois, outro componente é criado para anexar no displayHome, chamado SongItem.

Agora, tanto AlbumItem quanto SongItem poderá ser acessado. A inplementação disso será feita dentro de cada componente através do useNavigate do react-router-dom.

Agora, para criar as interfaces de cada album ou som, dois componentes (DisplayAlbum e DisplaySong) serão criados.

AlbumItem define uma url própria para cada album ao clicar encima dele, passando o ID desse album como parâmetro na url. Esse id é coletado pelo display album através de useParams.

Então, os albuns são descritos e abaixo as músicas do album são listadas.

Depois, em NavBar, os botões de avançar e retornar página tornam-se funcionais através do useNavigate. Caso a seta direita seja clicada, a página avança, e caso a esquerda a página volta.

Ao abrir um Álbum, a cor do background deve ser um gradiente referente a capa desse album. Dessa forma, no componente Display, verificamos se estamos dentro de um album através dos dados enviados pelas url. Depois, pegamos o id desse album também na url e pegamos o background armazenados no objeto referente a esse album e, através de um useEffect (que roda sempre que um componente é atualizado), alteramos a cor de fundo com um linear gradient.

O próximo passo é fazer com que o player de música funcione ao clicar em uma música do album.

Agora iremos começar a trabalhar com o player, tentado deixá-lo funcional. Para isso, uma tag de audio é criada no App.jsx e um novo componente é criado em context chamado PlayerContext.jsx.

Esse novo contexto criado no PlayerContext.jsx será colocado na main e encapsulará o componente App. Depois, em app será criada uma referência para o PlayerContext, através de useContext.

Agora, dentro do PlayerContext, será criada uma referência aos ícones da barra de player, que será passada através do componente player para o playerContext. Além disso, todos atributos da musica como tempo total, tempo atual, se está pausado ou não, etc são passados.

Agora, a barrinha verde deve ser configurada para, quando a música tocar, ela aumentar proporcionalmente, e isso é feito utilizando os valores de duração máxima da música e duração atual.

Agora, através da função PlayWithID, no componente PlayerContext, deseja-se clicar em uma música do menu principal e tocar ela. Da mesma forma, deseja-se clicar em uma música de um albúm e tocar ela. Isso é feito no DisplayAlbum.

Agora vamos dar funcionalidade aos botões de avançar e retornar músicas. A função será feita no PlayerContext, através das funções previous e next.

Agora deixaremos a barra de duração da música interativa, podendo avançar e voltar a música apenas clicando na barrinha.

Depois, foi dada funcionalidade ao botão de Home da página. Com isso, todo o frontEnd do spotify já foi criado, e agora começará a criação do backend.


APÓS TÉRMINO DO BACK E DO ADMIN

É hora agora de linkar o back com o front. Para isso instalaremos a dependência axios no front. Foi alterado algumas coisas no PlayerContext (maior num de alterações), App.jsx,  Player.jsx, Display.jsx, DisplayAlbum.jsx,
