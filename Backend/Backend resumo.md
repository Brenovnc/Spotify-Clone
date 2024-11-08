* npm nit
* npm install cloundinary cors dotenv express mongoose multer nodemon

Para o backend, usaremos as dependências cloudinary (upar arquivos MP3 e imagens), cors (conectar o backend com o frontend), dotenv (permite usar variáveis de ambiente), express (Cria as API's do backend), mongoose (conectar e gerenciar o banco de dados), multer (Permite upar os arquivos MP3 e as imagens para o front) e nodemon (cria um script para rodar o projeto facilmente).

Em package.json adicionaremos o "type": "module", que permite usar a instrução de import no backend.

Ainda nesse arquivo, em scripts, adionaremos o "server": "nodemon server.js". Quando o comando é executado, quaisquer alterações do backend serão reiniciará o server.

Agora,  a pasta src será criada, com a pasta config e a pasta controllers dentro dela. Em controllers, toda as lógicas de API serão armazenadas. Ainda dentro de src, a pasta middleware e a pasta models será criada os modelos usando o mongoose, que auxiliará o gerenciamento do database. A pasta routes armazenará multiplas rotas do backend.

Com as pastas criadas, o arquivo .env será criado na pasta raiz spotify-backend, que auxiliará no gerenciamento das variáveis de ambiente. Aqui será armazenado as secret keys e api key.

Em server.js, será criada uma API básica. Para testar essa api, será usada a extensão Thunder client.d

```
import express from 'express'
import cors from 'cors'
import 'dotenv/config' // Suporte da variável de ambiente no backend

// Configurando o express (app)
const app = express();
const port = process.env.PORT || 4000; // Definindo porta da variável de ambiente

// middlewares
app.use(express.json()) // Qualquer request será tranformada em um JSON
app.use(cors()) // Permite a conexão do front com o back, mesmo que estejam em portas diferentes

// Inicializando rotas
    // primeira API
app.get('/', (req, res) => res.send("API Working"))
app.listen(port, () => console.log(`Server started on ${port}`)) // Fornecendo a porta e uma função de callback
```

Ao fazer uma request, na url http://localhost:4000 e com o método get, obteremos a response.

Agora, as configurações que ligam o cloudinary e mongoDB serão criadas. Primeiramente, é necessário logar no site da cloudnary. Depois, através da API key fornecida, criaremos as variáveis de ambiente.

Agora, logaremos no site do MONGODB e criaremos um cluster. A conexão com esse cluster é feita através de um link com o nome de usuario e senha do cluster.

Primeiro será criada a API para adicionar músicas e álbuns no database. Para isso criaremos o songController.js em controllers. Nesse arquivo será criado os métodos Addsong e  Listsong. Para transformar essas funções em apis, criaremos o arquivo songRoutes.js na pasta routes e definiremos as rotas e os métodos (como post ou get) que essas rotas farão parte.

Agora criaremos o mongodb.js na pasta config. Através desse arquivo, conectaremos com o banco através de uma das variáveis criadas em env. Depois, da mesma forma, o arquivo cloudinary será criada linkando as variavies criadas em env.

agora criaremos o modelo da música, onde será definido quais propriedades serão adicionadas na música. O arquivo songModel então será responsável por criar o esquema do banco de dados.

Após isso, criaremos um middleware multer responsável por extrarir dados da música MP3 do front. Depois, em songController, criaremos toda a lógica para upar uma música para o banco de dados. Da mesma forma, toda a lógica para recuperar essa música do banco será implementada.

Agora, tendo retornado todas as músicas presentes no banco, faremos a função responsável por remover músicas, ainda no songController.


Agora, da mesma forma que as músicas, criaremos um album controller para realizar essas mesmas operações com albuns.

Com isso, backend está completamente feito. O próximo passo é a criação do **painel de administração**. 

2:45:40
