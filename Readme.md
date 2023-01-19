# Get notebooks [API]

Projeto técnico para empresa IN8

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto na sua máquina local para fins de desenvolvimento ou visão do detalhamento.

## 📋 Pré-requisitos
 - [Node](https://nodejs.org/en/) na versão 16.
 - IDE da sua escolha.
 - Docker (Opcional).

## 🔧 Instalação

  ### 👉 Com Docker (Não recomendado)

  #### Não encontrei uma solução para a API rodar dentro de um container, visto que a dependencia do puppeter necessita de um navegador para realizar as ações.

<details>
  - Rode o comando `docker push vini1212/notebooks-api:lastest`.

  - Após fazer o push da imagem docker rode o comando `docker run -p 3000:3000 notebooks-api`.

  - A partir daqui você terá um container rodando na sua porta 3000;

</details>
<br />

  ### 👉 Sem Docker
<details>
 
  - Clone o repositório com o comando
`git clone git@github.com:CandidoVinii/Notebooks-API.git`
  
  - Vá para a pasta do repositório
  `cd Notebooks-API/`

  - Rode o comando `npm install` para instalar as dependências necessárias para o projeto.

</details>
<br/>

## 🛠️ Construído com

* [Node.js](https://nodejs.org/en/) - Runtime Javascript
* [Puppeter](https://pptr.dev/guides/docker) - Para a captura de dados vindas do navegador
* [Express](https://expressjs.com/) - Para Exposição das rotas
* [Swagger](https://swagger.io/) - Para documentação da API

## :play_or_pause_button: Comandos Importantes

 * ```npm start``` para inicialização do servidor.
 * ```npm run debug``` para inicialização do servidor (recomendado no ambiente de desenvolvimento).
 * ```npm run start-gendoc``` para atualizar a documentação do swagger.

## Utilidades
* Caso queira fazer uso da API estarei deixando uma collection do POSTMAN com todas as operações presentes.
  [![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/21300395/2s8ZDX3hnt)
*  Para acessar a documentação do swagger basta acessar http://localhost:3000/doc/
## 📌 Versão

Está sendo utilizado [git](https://git-scm.com/) para controle de versão. Para as versões disponíveis.

## ✒️ Autores

* **Vinicius Aquino** - *Desenvolvedor Full-Stack* - [GitHub](https://github.com/CandidoVinii)


---
