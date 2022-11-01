# **Contexto do projeto**
A aplicação se trata de uma página para cadastro de currículo, o usuário pode criar uma conta, efetuar login, cadastrar e editar um currículo.
A pagina conta com uma área para administradores, onde é listado todos os currículos cadastrados e faz um relatório visual da pretensão salarial dos usuários, alterando a cor do valor indicado pelo usuário conforme a média salarial entre todos os usuários.
<br />
A aplicação foi construida utilizando React.js juntamente com Node.js e Typescript.
<br />
Logo abaixo segue todas as stack que foram utilizadas na construção da aplicação.
<br />
<br />

## **Stacks utilizadas no projeto**


<details>
  <summary><strong>Stacks Compartilhadas</strong></summary><br />

  * <a href="https://eslint.org/" target="_blank" rel="external"><span><strong>Lint</strong></span></a> - Mantém um padrão de código na aplicação.

  * <a href="https://www.npmjs.com/package/axios" target="_blank" rel="external"><span><strong>Axios</strong></span></a> - Foi utilizado para fazer as requisições das API's.

  * <a href="https://www.typescriptlang.org/" target="_blank" rel="external"><span><strong>TypeScript</strong></span></a> - Mantém um código legível e evitando erros comuns.


</details>

<details>
  <summary><strong>Stacks Front-End</strong></summary><br />

  * <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="external"><span><strong>React-Router-dom</strong></span></a> - Gerenciamento de rotas no React.

  * <a href="https://vitejs.dev/" target="_blank" rel="external"><span><strong>Vite.js</strong></span></a> - Ferramenta de configuração para uma aplicação React.

  * <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="external"><span><strong>Zustand</strong></span></a> - Ferramenta para gerenciamento de estados globais.

  * <a href="https://vitest.dev/" target="_blank" rel="external"><span><strong>Vitest</strong></span></a> - Ferramenta de construção de testes automatizados.

  * <a href="https://tailwindcss.com/" target="_blank" rel="external"><span><strong>Tailwind-css</strong></span></a> - Ferramenta para estilização de componentes.

  * <a href="https://www.npmjs.com/package/react-uuid" target="_blank" rel="external"><span><strong>uuid-react</strong></span></a> - Ferramenta para geração de ID's únicos.

</details>

<details>
  <summary><strong>Stacks Back-End</strong></summary><br />

  * <a href="https://jestjs.io/pt-BR/" target="_blank" rel="external"><span><strong>Jest</strong></span></a> - Ferramenta de construção de testes automatizados.

  * <a href="https://www.prisma.io/" target="_blank" rel="external"><span><strong>Prisma ORM</strong></span></a> - ORM de bancos relacionais e não relacionais para Node.js.

  * <a href="https://www.sqlite.org/index.html" target="_blank" rel="external"><span><strong>SQLite</strong></span></a> - Banco de dados relacional.

  * <a href="https://www.npmjs.com/package/cors" target="_blank" rel="external"><span><strong>Cors</strong></span></a> - Ferramenta de exibição de domínios.

  * <a href="https://www.npmjs.com/package/express" target="_blank" rel="external"><span><strong>Express</strong></span></a> - Ferramenta para Node.js para construção de servidores web.

  * <a href="https://www.npmjs.com/package/express-async-errors" target="_blank" rel="external"><span><strong>Express-async-errors</strong></span></a> - Ferramenta para captura de erros da aplicação.

  * <a href="https://www.npmjs.com/package/http-status-codes" target="_blank" rel="external"><span><strong>HTTP-status-codes</strong></span></a> - Padroniza códigos de status HTTP.

  * <a href="https://joi.dev/" target="_blank" rel="external"><span><strong>JOI</strong></span></a> - Ferramenta para validação de dados.

  * <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="external"><span><strong>JWT</strong></span></a> - Ferramenta de criptografia de dados.

</details>
<br />

## **Como iniciar o projeto localmente**
<br />
Para rodar a aplicação localmente sera necessário ter o Node.js instalado em sua máquina.
Voce pode conferir como instalar pela <a href="https://nodejs.org/en/" target="_blank" rel="external"><span><strong>Documentação oficial</strong></span></a> do Node.
<br />
<br />
Vamos começar clonado o repositório, para isso utilize o comando a seguir:

```sh
git clone git@github.com:KleversonEller/test-amais.git
```
<br />
Após ter clonado o repositório entre na pasta raiz do projeto `./teste-amais` :

```sh
cd teste-amais/
```
<br />
Em seguida execute o seguinte comando para fazer a instalação de todas as dependências:

```sh
npm run pre:start
```
Esse comando ira instalar as dependências de todos os `servers` e da aplicação `web`, isso pode demorar um pouco.
<br />
Caso queira pode executar separadamente navegando até a raiz de cada aplicação e utilizar o comando:

```sh
npm install
```
<br />

Para rodar todos os testes da aplicação, na raiz do projeto `./teste-amais` execute o seguinte comando:

```sh
npm test
```

Isso ira executar os testes de cada aplicação de uma única vez.
<br />
Caso queira executar os teste separadamente pode utilizar o mesmo comando na raiz de cada aplicação.
<br /><br />

Para inicializar cada aplicação execute os seguintes comando em terminais diferentes:
<br />

**Pagina Web**

```sh
npm run dev:web
```
A pagina web ira rodar na `porta 5173` da sua máquina (http://localhost:5173/).
<br />

**API de Usuários**

```sh
npm run dev:users
```
Ela ira utilizar a `porta 3010` da sua máquina.
<br />
Ja existem quatro usuários cadastrados para testar a aplicação, sendo eles:
<br />

*User 1*
<br />
`Email: user1@test.com`
<br />
`Password: test321`
<br />

*User 2*
<br />
`Email: user2@test.com`
<br />
`Password: test321`
<br />

*User 3*
<br />
`Email: user3@test.com`
<br />
`Password: test321`
<br />

*Admin*
<br />
`Email: admin@admin.com`
<br />
`Password: admin321`
<br />

Caso queira conferir as informações no banco de dados utilize o seguinte comando para visualizar o banco de dados.
<br />
Caso esteja na raiz do projeto navegue ate a aplicação back-end:

```sh
cd packages/server/users/
```
Estando na aplicação back-end utilize o comando abaixo:

```sh
npx prisma studio
```
Esse comando ira abrir uma interface do banco de dados no navegador.
<br />
<br />
Para saber mais sobre a API veja sua <a href="https://documenter.getpostman.com/view/22008659/2s8YRjptSb" target="_blank" rel="external"><span><strong>Documentação.</strong></span></a>
